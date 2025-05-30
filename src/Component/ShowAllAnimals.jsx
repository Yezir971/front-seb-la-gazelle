import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';
import Charly from '../assets/img/avatars/charly-full-body.webp';
import James from '../assets/img/avatars/james-full-body-without-fond.webp';
import styled from 'styled-components';
import { CursorContext } from '../context/CursorContext';
import Sebi from "../Component/Sebi"

const ImageLogoCharly = styled.img`
  left: 4%;
  top: 59%;
  transform: translate(-50%, 0%);
  width: auto;
  height: 300px;
  position: absolute;
  @media (max-width: 768px) {
    height:200px;
  }

`

const ImageLogoJames = styled.img`
  right: 50%;
  top: 45%;
  transform: translate(50%, -50%);
  width: auto;
  height: 300px;
  position: absolute;
  @media (max-width: 768px) {
    height: 150px;
    top: 57%;
  }
`
const ContainerAnimals = styled.div`
  height:75vh;
  width:100%;
  position: relative;
  @media (max-width: 768px) {
    height:95vh;

  }
`

const ShowAllAnimals = () => {
  const {gameModalState, toggleGameModals } = useContext(GameContext);
  const { setCursorType, pointer, cursor } = useContext(CursorContext);

  return (
    <>
     {gameModalState.showAllAnimals && (  
        <ContainerAnimals>
          <ImageLogoJames 
          onMouseEnter={() => setCursorType(pointer)}
          onMouseLeave={() => setCursorType(cursor)} 
          onMouseDown={() => setCursorType(pointer)}
          onMouseUp={() => setCursorType(cursor)} 
          src={James} alt="Avatar de James" onClick={()=> toggleGameModals("JamesGame")} draggable="false"/>
          <ImageLogoCharly 
          onMouseEnter={() => setCursorType(pointer)}
          onMouseLeave={() => setCursorType(cursor)} 
          onMouseDown={() => setCursorType(pointer)}
          onMouseUp={() => setCursorType(cursor)} 
          src={Charly} alt="Avatar de Charly" onClick={()=> toggleGameModals("CharlyGame")} draggable="false"/>
          <Sebi replique="aideSebi" repliqueSound="sebiReplique1"/>
        </ContainerAnimals>
     )}
    </>
  )
}

export default ShowAllAnimals
