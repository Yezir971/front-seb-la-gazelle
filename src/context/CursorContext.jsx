import { createContext } from "react";
import cursor from "../assets/img/cursor/cursor.png";
import pointer from "../assets/img/cursor/cursor-pointer.png"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap"
import styled from "styled-components";

export const CursorContext = createContext()

const Cursor = styled.div`
  background-image: url(${(props) => props.type});
  width: 32px;
  height: 32px;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  transform: translate(-60%, -60%);
  z-index: 9999;
`
const CursorContextProvider = (props) => {
    const cursorRef = useRef(null);
    const [cursorType, setCursorType] = useState(cursor);
    const ResetCursor = () => {
      useEffect(() => {
        const mouseMove = e => {
          gsap.to(cursorRef.current, {
            x:e.clientX,
            y:e.clientY,
            duration:0.1,
            ease:"power2.out"
          })
        }
    
        const handleMouseEnter = () => setCursorType(pointer);
        const handleMouseLeave = () => setCursorType(cursor);
    
        window.addEventListener("mousemove", mouseMove);
        document.querySelectorAll("button, a, gestionButton, boutonPlayGame, .pointerCursor").forEach((el) => {
          el.addEventListener("mouseover", handleMouseEnter);
          el.addEventListener("mouseout", handleMouseLeave);
          el.addEventListener("mousedown", handleMouseEnter);
          el.addEventListener("mouseup", handleMouseLeave);
        });
        
        return () => {
          window.removeEventListener("mousemove", mouseMove);
          document.querySelectorAll("button, a, .gestionButton, .boutonPlayGame, .pointerCursor").forEach((el) => {
            el.removeEventListener("mouseover", handleMouseEnter);
            el.removeEventListener("mouseout", handleMouseLeave);
            el.removeEventListener("mousedown", handleMouseEnter);
            el.removeEventListener("mouseup", handleMouseLeave);
          });
        }
    
      }, [])

    }
    ResetCursor()
    return(
        <CursorContext.Provider value={{cursorType, setCursorType, cursor, ResetCursor,  pointer }}>
            <Cursor ref={cursorRef} type={cursorType}></Cursor>
            {props.children}
        </CursorContext.Provider>
    )
}

export default CursorContextProvider