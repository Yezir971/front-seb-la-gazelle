import { useRef, useEffect, useContext, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import styled from "styled-components";
import head from "../assets/img/components-sebi/head.png";
import headStart from "../assets/img/components-sebi/head-start.png";
import body from "../assets/img/components-sebi/body.png";
import ears from "../assets/img/components-sebi/ears.png";
import tail from "../assets/img/components-sebi/taill.png";

// plugin pour l'animation du texte
import { TextPlugin } from "gsap/TextPlugin";
import { CursorContext } from "../context/CursorContext";
import ButtonSwitchEnFr from "../Component/ButtonSwitchEnFr";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";
import AudioPlayer from "../Component/AudioPlayer";
import GameEndScreen from "../Component/EndGameScreen";
import EndGame from "../Component/EndGame";
gsap.registerPlugin(TextPlugin);

// utilisation de drag nous sert a simuler la pression du click pour lancer l'animation 
gsap.registerPlugin(Draggable);

const Container = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin: auto;
`

const Image = styled.img`
  position: absolute;
  width: 100%;
`

const Drag = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: grab;
  width: 100%;
  height: 120%;
  z-index: 99999;
`
const Hearth = styled.img`
  width:20px;
`


const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #ffcc00, #ff6600);
`;
const Test = () => {
  const {t} = useTranslation()
  const { language, change } = useContext(LanguageContext);


  const headRef = useRef(null);
  const headStartRef = useRef(null)
  const tailRef = useRef(null);
  const earsRef = useRef(null);
  const draggableRef = useRef(null);
  const animationTimeline = useRef(null); // Stocke l'animation en cours
  const { stopCursorGrabAnimation ,startCursorGrabAnimation, setCursorType, cursor,  cursorGrabOpen} = useContext(CursorContext);

  // Animation au "caressage"
  const startAnimation = () => {
    // Arrêter toute animation en cours
    if (animationTimeline.current) {
      animationTimeline.current.kill();
    }
    startCursorGrabAnimation()
    // on fait disparaitre headRef le temps de l'animation 
    gsap.to(headRef.current, { opacity: 1, duration:0.2 }); 
    gsap.to(headStartRef.current, { opacity: 0, duration:0.2});

    // Créer une timeline d'animation qui boucle
    animationTimeline.current = gsap.timeline({ repeat: -1, yoyo: true });
  
    animationTimeline.current
      .to(headRef.current, { rotation: -5, duration: 0.3, ease: "power1.inOut" },0)
      // .to(headStartRef.current, { rotation: -5, duration: 0.3, ease: "power1.inOut"  }, 0) // Cache headStart
      .to(tailRef.current, { rotateX: 40, rotateY: 40, duration: 0.3, ease: "power1.inOut" }, 0)
      .to(earsRef.current, { scaleY: 0.9, duration: 0.3, ease: "power1.inOut" }, 0);
  };
  // Stopper l'animation et remettre les éléments à l'état initial
  const stopAnimation = () => {



      if (animationTimeline.current) {
        animationTimeline.current.kill();
      }

      // on affiche a nouveau headRef 
      gsap.to(headRef.current, { opacity: 0, duration:0.2 });
      gsap.to(headStartRef.current, { opacity: 1, duration:0.2 });

      // reset tout les éléments 
      gsap.to([headRef.current, headStartRef.current], {
        rotation: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    
      gsap.to(tailRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    
      gsap.to(earsRef.current, {
        scaleY: 1,
        duration: 0.2,
        ease: "power2.out",
      });
      stopCursorGrabAnimation()
  };

  // Initialisation du "glissement"
  useEffect(() => {
    if (draggableRef.current) {
      Draggable.create(draggableRef.current, {
        type: "x,y",
        bounds: "body",
        inertia: true, // Rend le mouvement fluide
        liveSnap: { x: () => 0, y: () => 0 }, // Empêche le déplacement en restant fixe
        onPress: startAnimation, // Démarrer l'animation en boucle
        onRelease: stopAnimation, // Arrêter l'animation au relâchement
      });
    }
  }, []);
  const [score] = useState(10);

  return (
    <>
      

      <EndGame nameGame="james le hiboux" score={score}/>
    </>
  );
};

export default Test;
