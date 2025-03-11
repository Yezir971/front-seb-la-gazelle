import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';
import { NavLink } from 'react-router-dom'
import ImageJamesGames from '../assets/img/imageJeuJames.png'
import  arrowReturn  from "../assets/img/Vector-return.svg"
import styled from 'styled-components';
import { CursorContext } from '../context/CursorContext';

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
const JamesGameModal = () => {
  const {gameModalState, toggleGameModals } = useContext(GameContext);
  const { setCursorType, pointer, cursor } = useContext(CursorContext);

  return (
    <>
    {gameModalState.JamesGameModal && (  
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
        <img className='pictureGame' src={ImageJamesGames} alt='jeu de James' draggable="false"/>
        <button className='boutonPlayGame'>
          <NavLink 
          onMouseEnter={() => setCursorType(pointer)}
          onMouseLeave={() => setCursorType(cursor)} 
          onMouseDown={() => setCursorType(pointer)}
          onMouseUp={() => setCursorType(cursor)} 
          to={'james_le_hibou'}> Jouer </NavLink>
        </button>
      </div>
    )}
  </>
  )
}

export default JamesGameModal
