import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';
import Charly from '../assets/img/Charly-avatar.png';
import James from '../assets/img/james-avatar.png';
import styled from 'styled-components';

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

const ShowAllAnimals = () => {
    const {gameModalState, toggleGameModals } = useContext(GameContext);
  return (
    <>
     {gameModalState.showAllAnimals && (  
        <div>
            <ImageLogoJames src={James} alt="Avatar de James" onClick={()=> toggleGameModals("JamesGame")} draggable="false"/>
            <ImageLogoCharly src={Charly} alt="Avatar de Charly" onClick={()=> toggleGameModals("CharlyGame")} draggable="false"/>
        </div>
     )}
    </>
  )
}

export default ShowAllAnimals
