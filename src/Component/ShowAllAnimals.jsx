import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';
import Charly from '../assets/img/Charly-avatar.png';
import James from '../assets/img/james-avatar.png';
import styled from 'styled-components';
import { CursorContext } from '../context/CursorContext';
import Sebi from "../Component/Sebi"

const ImageLogoCharly = styled.img`
  left: -70px;
  top: 450px;
  width: 200px;
  height: 200px;
  position: absolute;

`

const ImageLogoJames = styled.img`
  right: 600px;
  top: 130px;
  width: 200px;
  height: 200px;
  position: absolute;
`
const ContainerAnimals = styled.div`
  height:75vh;
  width:100%;
  position: relative;
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
          <Sebi />
        </ContainerAnimals>
     )}
    </>
  )
}

export default ShowAllAnimals
