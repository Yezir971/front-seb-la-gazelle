import { createContext } from "react";
import cursor from "../assets/img/cursor/cursor.webp"
import pointer from "../assets/img/cursor/cursor-pointer.webp"
import cursorGrabClose from "../assets/img/cursor/cursor-grab-close.webp"
import cursorGrabOpen from "../assets/img/cursor/cursor-grab-open.webp"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap"
import styled from "styled-components";

export const CursorContext = createContext()

const Cursor = styled.div`
  background-image: url(${(props) => props.type});
  width: 32px;
  height: 32px;
  background-size: contain;
  background-repeat:no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  transform: translate(-60%, -60%);
  z-index: 9999;
  @media (max-width: 768px) {
    display:none;
    pointer-events: initial;

  }
`
const CursorContextProvider = (props) => {
  const cursorRef = useRef(null);
  const cursorAnimationRef = useRef(null); // Pour gérer l'animation de "grab"
  const [cursorType, setCursorType] = useState(cursor);

  useEffect(() => {
    const ResetCursor = () => {
        const mouseMove = e => {
          gsap.to(cursorRef.current, {
            x:e.clientX,
            y:e.clientY,
            duration:0.1,
            ease:"power2.out"
          })
        }
        // const handleMouseEnter = () => setCursorType(pointer);
        // const handleMouseLeave = () => setCursorType(cursor);
        
        window.addEventListener("mousemove", mouseMove);
        // document.querySelectorAll("button, a, gestionButton, boutonPlayGame, .pointerCursor").forEach((el) => {
        //   el.addEventListener("mouseover", handleMouseEnter);
        //   el.addEventListener("mouseout", handleMouseLeave);
        //   el.addEventListener("mousedown", handleMouseEnter);
        //   el.addEventListener("mouseup", handleMouseLeave);
        // });
        
        return () => {
          window.removeEventListener("mousemove", mouseMove);
          // document.querySelectorAll("button, a, .gestionButton, .boutonPlayGame, .pointerCursor").forEach((el) => {
          //   el.removeEventListener("mouseover", handleMouseEnter);
          //   el.removeEventListener("mouseout", handleMouseLeave);
          //   el.removeEventListener("mousedown", handleMouseEnter);
          //   el.removeEventListener("mouseup", handleMouseLeave);
          // });
        }
      }
      ResetCursor()
    }, [])
    // Animation du curseur quand on "attrape"
    const startCursorGrabAnimation = () => {
      if (cursorAnimationRef.current) {
        cursorAnimationRef.current.kill();
      }

      cursorAnimationRef.current = gsap.timeline({ repeat: -1, yoyo: true });

      cursorAnimationRef.current.to(cursorRef.current, {
        duration: 0.2,
        yoyo: true,
        repeat: -1,
        onRepeat: () => {
          setCursorType((prev) => prev === cursorGrabOpen ? cursorGrabClose : cursorGrabOpen );
        },
      });
    };

    // Arrêter l'animation du curseur
    const stopCursorGrabAnimation = () => {
      if (cursorAnimationRef.current) {
        cursorAnimationRef.current.kill();
        cursorAnimationRef.current = null;
      }
    };
    return(
        <CursorContext.Provider value={{cursorType, setCursorType, cursor,  pointer, cursorGrabClose, cursorGrabOpen, startCursorGrabAnimation, stopCursorGrabAnimation  }}>
            <Cursor ref={cursorRef} type={cursorType}></Cursor>
            {props.children}
        </CursorContext.Provider>
    )
}

export default CursorContextProvider