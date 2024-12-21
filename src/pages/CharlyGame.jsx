import { useEffect, useRef, useState } from "react";
import NavBarGame from "../Component/NavBarGame";
import styled from "styled-components";
import screen from "../assets/img/charly-game/charly-game-1.png";
import gsap from "gsap";

// Styled Components
const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const PictureGameCharly = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
  cursor: pointer;

  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const CharlyGames = () => {
    const [score, setScore] = useState(0);
    const [mouse, setMouse] = useState({ x: 0, y: 0 }); // position du click
    const [interactScore, setInteractScore] = useState('')
    //   const [windowSize, setWindowSize] = useState({x:window.innerWidth,y:window.innerHeight }); // taille de lécran
    //   const [dimensions, setDimensions] = useState({ width: 0, height: 0 }); // dimension de l'image
    const scoreContainerRef = useRef(null); // référence pour la taille de l'image


  
//  fonction qui va permettre de savoir où exactement l'utilisateur a clicker 
    const handleClick = (event) => {
        // getBoundingClientRect permet d'avoir la position de l'image par rapport a la fenêter 
        const rect = scoreContainerRef.current.getBoundingClientRect();
        const relativeX = event.clientX - rect.left; // Position X relative à l'image
        const relativeY = event.clientY - rect.top; // Position Y relative à l'image
        
        
        // Calcul des coordonnées proportionnelles
        const proportionalX = (relativeX / rect.width) * 600; // 600 est la largeur originale de l'image
        const proportionalY = (relativeY / rect.height) * 600; // 600 est la hauteur originale de l'image

        setMouse({ x: proportionalX, y: proportionalY });

        // Vérifiez si le clic est dans une zone spécifique
        if (proportionalX >= 45 && proportionalX <= 97 && proportionalY >= 367 && proportionalY <= 400) {
            setInteractScore("win");
            setScore((prev) => prev + 1);
        } else {
            gsap.to(scoreContainerRef.current, { x: 10, duration: 0.3, yoyo: true, repeat: 2 }); // Shake animation
            setInteractScore("lose");
        }
    
    };
    console.log("Position relative du clic : ", mouse);

    const interacteScore = (mouse.x >= 45 && mouse.x <= 97) && (mouse.y >= 367 && mouse.y <= 400) ? "win" : "lose"


    return (
        <>
            <NavBarGame points={score} />
            <p>{interactScore}</p>
            <PictureContainer>
                <PictureGameCharly draggable="false" ref={scoreContainerRef} src={screen} onClick={handleClick} />
            </PictureContainer>
        </>
    );
};

export default CharlyGames;
