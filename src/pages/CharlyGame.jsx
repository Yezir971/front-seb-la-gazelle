import { useContext, useEffect, useRef, useState } from "react";
import NavBarGame from "../Component/NavBarGame";
import styled from "styled-components";
// import screen from "../assets/img/charly-game/charly-game-1.png";
import data from "../data/charlyGame.js";
import imageCharly from "../assets/img/charly-full-body.webp";
import TimmerComponent from "../Component/TimmerComponent.jsx";
import { TimerContext } from "../context/TimerContext.jsx";
import { CursorContext } from "../context/CursorContext.jsx";
import { t } from "i18next";
import EndGame from "../Component/EndGame.jsx";
import Charly from "../Component/Charly.jsx";
import Sebi from "../Component/Sebi.jsx";

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
  margin:-40px auto;
  @media (min-width: 768px) {
    max-width: 700px;
  }
`
const ContainerGame = styled.div`
  position:relative;
  height:75vh;
`
const ContainerTimer = styled.div`
  position:absolute;
  right:15px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const CharlyContainer = styled.div`
  height: 350px;
  position: absolute;
  bottom:0px;
  right:0px;
  transform: translate(-50%, -50%);
`



const CharlyGames = () => {
    const [score, setScore] = useState(0);
    const [mouse, setMouse] = useState({ x: 0, y: 0 }); // position du click
    const [interactScore, setInteractScore] = useState('')
    const [isFirstAnser, setIsFirstAnser] = useState(false)
    const [nbLifeMin, setNbLifeMin] = useState(0)
    const [nbLife, setNbLife] = useState(3)

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
          setInteractScore(t("gagner"));
          setIsFirstAnser("true")
          setScore((prev) => prev + 1);
          // si l'utilisateur à réussi a trouver charly on trouve aléatoirement une autre image 
          let newRandomNumber = Math.floor(Math.random() * (data.length ) )

          // boucle while qui va nous permettre de générer une image différente de celle générer 
          while(newRandomNumber === randomPicture){
            newRandomNumber = Math.floor(Math.random() * (data.length ))
          }
          setRandomPicture(newRandomNumber)
        } else {
          if(nbLifeMin < nbLife){
              setNbLifeMin((prev) => prev+1)
          }
          // gsap.to(scoreContainerRef.current, { x: 10, duration: 0.3, yoyo: true, repeat: 2 }); // Shake animation
          setInteractScore(t("perdu"));
        }
    
    };

    return (
        <>
            <NavBarGame points={score} nbLife={nbLife} nbLifeMin={nbLifeMin} />
            <ContainerGame>

              

              {(time > 0 && time <= 60) && (nbLifeMin !== nbLife) ? (
                <>
                  <ContainerTimer>
                    <TimmerComponent  />
                  </ContainerTimer>
                  <PictureContainer>
                      <PictureGameCharly 
                      onMouseEnter={() => setCursorType(pointer)}
                      onMouseLeave={() => setCursorType(cursor)} 
                      draggable="false" ref={scoreContainerRef} src={data[randomPicture].src} onClick={handleClick} />
                  </PictureContainer>
                  <Charly key={randomPicture} isFirstAnser={isFirstAnser} />
                
                </>

              ):(
                <>
                  <EndGame score={score} nameGame={"Charly le caméléon"}/>
                  <Sebi key={randomPicture} replique="sebiOnjoueEncore" repliqueSound="sebiReplique6"/>
                </>
              )}
            </ContainerGame>
        </>
    );
};

export default CharlyGames;
