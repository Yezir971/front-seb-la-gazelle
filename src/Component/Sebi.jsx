import { useRef, useEffect, useContext, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import styled from "styled-components";
import head from "../assets/img/components-sebi/head.png";
import headStart from "../assets/img/components-sebi/head-start.png";
import body from "../assets/img/components-sebi/body.png";
import ears from "../assets/img/components-sebi/ears.png";
import tail from "../assets/img/components-sebi/taill.png";

import { CursorContext } from "../context/CursorContext";
import Bubble from "./Bubble";

// utilisation de drag nous sert a simuler la pression du click pour lancer l'animation 
gsap.registerPlugin(Draggable);

const Container = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  // bottom:0px;
  // right:200px;
`

const Image = styled.img`
  position: absolute;
  width: 200px;
`

const Drag = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 120%;
  z-index: 99999;
`
const Hearth = styled.img`
  width:20px;
`
const ContaineAnimation = styled.div`
  display:flex;
  position:absolute;
  bottom:0px;
  right:0px;

`
const ContaineBubble = styled.div`

`


const Sebi = ({replique ,repliqueSound}) => {
    const headRef = useRef(null);
    const headStartRef = useRef(null)
    const tailRef = useRef(null);
    const earsRef = useRef(null);
    const draggableRef = useRef(null);
    const animationTimeline = useRef(null); // Stocke l'animation en cours
    const { stopCursorGrabAnimation ,startCursorGrabAnimation, setCursorType, cursor,  cursorGrabOpen} = useContext(CursorContext);
    const [guili, setGuili] = useState(false)
    
    // Animation au "caressage"
    const startAnimation = () => {
      // Arrêter toute animation en cours
      if (animationTimeline.current) {
        animationTimeline.current.kill();
      }
      setGuili(true)
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
        setGuili(false)
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
  
    return (
      <ContaineAnimation>
        <ContaineBubble>
          <Bubble guili={guili} replique={replique} repliqueSound={repliqueSound} />
        </ContaineBubble>
        <Container>
              {/* <Hearth src="https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg"/> */}
              {/* Corps */}
              <Image src={body} alt="Corps" style={{ zIndex: 2 }} />
        
              {/* Tête */}
              <Image ref={headRef} src={head} alt="Tête" style={{ zIndex: 2, opacity: 0  }} />
              <Image ref={headStartRef} src={headStart} alt="Tête start" style={{ zIndex: 2}} />
        
              {/* Queue */}
              <Image ref={tailRef} src={tail} alt="Queue" style={{ zIndex: 1 }} />
        
              {/* Oreilles */}
              <Image ref={earsRef} src={ears} alt="Oreilles" style={{ zIndex: 1 }} />
        
              {/* Zone draggable qui détecte le drag */}
              <Drag 
                onMouseEnter={() => setCursorType(cursorGrabOpen)}
                onMouseLeave={() => setCursorType(cursor)}
                // compatibilité mobil 
                onTouchStart={startAnimation} // Pour les téléphones
                onTouchEnd={stopAnimation}  
              ref={draggableRef} />
        </Container>

      </ContaineAnimation>
    );
}

export default Sebi