import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';
import { NavLink } from 'react-router-dom'
import ImageJamesGames from '../assets/img/sub-backgroung/imageJeuJames.webp'
import  arrowReturn  from "../assets/img/picto/Vector-return.svg"
import styled from 'styled-components';
import { CursorContext } from '../context/CursorContext';
import { t } from "i18next";
import Sebi from "../Component/Sebi"
const Arrow = styled.img`
  width:30px;
  height:30px;
  position:absolute;;
  top:10px;
  left:43px;

`
const ContainerArrowLink = styled.div`
  position:relative;
  width:100%;
`
const Container = styled.div`
  height:75vh;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    height:95vh;

  }
`
const JamesGameModal = () => {
  const {gameModalState, toggleGameModals } = useContext(GameContext);
  const { setCursorType, pointer, cursor } = useContext(CursorContext);

  return (
    <>
    {gameModalState.JamesGameModal && (  
      <Container>
        <div className='containerModalGame'>
          <ContainerArrowLink>
            <NavLink
            onMouseEnter={() => setCursorType(pointer)}
            onMouseLeave={() => setCursorType(cursor)} 
            onMouseDown={() => setCursorType(pointer)}
            onMouseUp={() => setCursorType(cursor)} 
            to={"/"}>
                <Arrow draggable="false" src={arrowReturn} alt="flèche retour" onClick={()=> toggleGameModals("closeGame")}/>
            </NavLink>        
          </ContainerArrowLink>
          <img className='pictureGame' src={ImageJamesGames} alt="jeu de James" draggable="false"/>
          <button className='boutonPlayGame'>
            <NavLink 
            onMouseEnter={() => setCursorType(pointer)}
            onMouseLeave={() => setCursorType(cursor)} 
            onMouseDown={() => setCursorType(pointer)}
            onMouseUp={() => setCursorType(cursor)} 
            to={'james_le_hibou'}> {t('jouer')} </NavLink>
          </button>
        </div>
        <Sebi replique="jamesgames" />
      </Container>
    )}
  </>
  )
}

export default JamesGameModal
