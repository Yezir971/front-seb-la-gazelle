import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';
import { NavLink } from 'react-router-dom';
import ImageCharlyGame from "../assets/img/charly-game/charly-game-1.png";
import  arrowReturn  from "../assets/img/Vector-return.svg"
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
`

const CharlyGameModal = () => {
  const {gameModalState, toggleGameModals } = useContext(GameContext);
  // const {ResetCursor} = useContext(CursorContext)
  // ResetCursor()
  const { setCursorType, pointer, cursor } = useContext(CursorContext);

  return (
    <>
      {gameModalState.CharlyGameModal && (  
        <Container>
          <div className='containerModalGame'>
            <ContainerArrowLink>
              <NavLink
              onMouseEnter={() => setCursorType(pointer)}
              onMouseLeave={() => setCursorType(cursor)} 
              onMouseDown={() => setCursorType(pointer)}
              onMouseUp={() => setCursorType(cursor)} 

              className="pointerCursor" to={"/"}>
                <Arrow draggable="false" src={arrowReturn} alt="flèche retour" onClick={()=> toggleGameModals("closeGame")}/>
              </NavLink>        
            </ContainerArrowLink>
            <img src={ImageCharlyGame} alt="aperçu du jeu de Charly le caméléon" className='pictureGame' draggable="false"/>
            <button 
            onMouseEnter={() => setCursorType(pointer)} 
            onMouseLeave={() => setCursorType(cursor)} 
            onMouseDown={() => setCursorType(pointer)}
            onMouseUp={() => setCursorType(cursor)}
            className='boutonPlayGame'>
              <NavLink  to={'charly_le_cameleon'}>{t('jouer')}</NavLink>
            </button>
          </div>
          <Sebi replique="charlygames"/>
        </Container>
      )}
    </>
  )
}

export default CharlyGameModal
