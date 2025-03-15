import { useContext, useEffect, useRef, useState } from "react";
import NavBarGame from "../Component/NavBarGame";
import styled from "styled-components";
// import screen from "../assets/img/charly-game/charly-game-1.png";
import data from "../data/charlyGame.js";
import imageCharly from "../assets/img/charly-full-body.webp";
import TimmerComponent from "../Component/TimmerComponent.jsx";
import { TimerContext } from "../context/TimerContext.jsx";
import { CursorContext } from "../context/CursorContext.jsx";

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
`

const PictureGameCharly = styled.img`
  width: 100%;
  max-width: 600px;
  // height: auto;
  object-fit: contain;
  cursor: pointer;

  @media (min-width: 768px) {
    max-width: 700px;
  }
`
const ContainerGame = styled.div`
  position:relative;
`
const ContainerTimer = styled.div`
  position:absolute;
  right:15px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`
const CharlyPicture = styled.img`
    width: auto;
    height: 350px;
    position: absolute;
    top: 70%;
    left: 10%;
    transform: translate(-50%, -50%);
`


const CharlyGames = () => {
    const [score, setScore] = useState(0);
    const [mouse, setMouse] = useState({ x: 0, y: 0 }); // position du click
    const [interactScore, setInteractScore] = useState('')
    const {time, setTime} = useContext(TimerContext)
    const { setCursorType, pointer, cursor } = useContext(CursorContext);


    useEffect(() => {
      setScore(0);
      setTime(60);
    },[])
    

    const scoreContainerRef = useRef(null); // référence pour la taille de l'image

    // variable aléatoire qui va permettre de choisir aléatoirement une image 
    const [randomPicture, setRandomPicture] = useState(Math.floor(Math.random() * (data.length ) ));
    
    //fonction qui va permettre de savoir où exactement l'utilisateur a clicker 
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
        if (proportionalX >= data[randomPicture].position[0].xMin && proportionalX <= data[randomPicture].position[0].xMax && proportionalY >= data[randomPicture].position[1].yMin && proportionalY <= data[randomPicture].position[1].yMax) {
          setInteractScore("win");
          setScore((prev) => prev + 1);
          // si l'utilisateur à réussi a trouver charly on trouve aléatoirement une autre image 
          let newRandomNumber = Math.floor(Math.random() * (data.length ) )

          // boucle while qui va nous permettre de générer une image différente de celle générer 
          while(newRandomNumber === randomPicture){
            newRandomNumber = Math.floor(Math.random() * (data.length ))
          }
          setRandomPicture(newRandomNumber)
        } else {
          // gsap.to(scoreContainerRef.current, { x: 10, duration: 0.3, yoyo: true, repeat: 2 }); // Shake animation
          setInteractScore("lose");
        }
    
    };
    
    const handleReplay = () => {
      window.location.reload();
    };

    return (
        <>
            <NavBarGame points={score} />
            <ContainerGame>
              <CharlyPicture className="imageCharly" src={ imageCharly } alt="Charly le caméléon" />
              <ContainerTimer>
                <TimmerComponent  />
              </ContainerTimer>

              {(time > 0 && time <= 60) ? (
                <PictureContainer>
                    <PictureGameCharly 
                    onMouseEnter={() => setCursorType(pointer)}
                    onMouseLeave={() => setCursorType(cursor)} 
                    draggable="false" ref={scoreContainerRef} src={data[randomPicture].src} onClick={handleClick} />
                </PictureContainer>
              ):(
                <ScoreContainer>
                  <button onClick={handleReplay}>Nouvelle partie</button>
                </ScoreContainer>
              )}
            </ContainerGame>
        </>
    );
};

export default CharlyGames;
