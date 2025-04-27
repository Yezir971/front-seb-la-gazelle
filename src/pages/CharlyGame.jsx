import { useContext, useEffect, useRef, useState } from "react";
import NavBarGame from "../Component/NavBarGame";
import styled from "styled-components";
import data from "../data/charlyGame.js";
import TimmerComponent from "../Component/TimmerComponent.jsx";
import { TimerContext } from "../context/TimerContext.jsx";
import { CursorContext } from "../context/CursorContext.jsx";
import { LvlGameContext } from "../context/LvlGameContext.jsx";
import { t } from "i18next";
import EndGame from "../Component/EndGame.jsx";
import Charly from "../Component/Charly.jsx";
import Sebi from "../Component/Sebi.jsx";

const breakpoints = {
  mobile: '600px',
  tablet: '900px',
  medium: '1607px',
}

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:3rem;
  padding: 20px;
  width:60vh;
  margin:20px auto;
`

const PictureGameCharly = styled.img`
  width: 100%;
  max-width: 800px;
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
  height:82vh;
`
const ContainerTimer = styled.div`
  // position:absolute;
  // right:15px;
  // bottom:0px;
  // left:0px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const ContainerCharlyTimer = styled.div`
    display:grid;
    margin-inline: 20%;
    gap: 10%;
    grid-template-columns:2fr 2fr;    
    justify-content:space-around;
    align-items: end;
    position:relative;
    margin-top:30px;
    @media (max-width: 900px) {
        grid-template-columns:auto 1fr;    
    }
    @media (max-width: ${breakpoints.tablet}) {
        margin-inline: 10%;
    }
    @media (max-width: ${breakpoints.mobile}) {
        margin-inline: 0%;
    }
`
const Container = styled.div`
  display:grid;
  grid-template:row;
  gap:10px;

`



const CharlyGames = () => {
    const [score, setScore] = useState(0);
    const [mouse, setMouse] = useState({ x: 0, y: 0 }); // position du click
    const [interactScore, setInteractScore] = useState('')
    const [isFirstAnser, setIsFirstAnser] = useState(false)
    const [nbLifeMin, setNbLifeMin] = useState(0)
    const {nbLife} = useContext(LvlGameContext)
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
                <Container>
                  <PictureContainer>
                      <PictureGameCharly 
                      onMouseEnter={() => setCursorType(pointer)}
                      onMouseLeave={() => setCursorType(cursor)} 
                      draggable="false" ref={scoreContainerRef} src={data[randomPicture].src} onClick={handleClick} />
                  </PictureContainer>
                  <ContainerCharlyTimer>
                    <ContainerTimer>
                      <TimmerComponent  />
                    </ContainerTimer>
                    <Charly key={randomPicture} isFirstAnser={isFirstAnser} />
                  </ContainerCharlyTimer>
                </Container>

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
