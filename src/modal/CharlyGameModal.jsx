import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';
import { NavLink } from 'react-router-dom';
import ImageCharlyGame from "../assets/img/charly-game/charly-game-1.png";
import  arrowReturn  from "../assets/img/Vector-return.svg"
import styled from 'styled-components';

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


const CharlyGameModal = () => {
  const {gameModalState, toggleGameModals } = useContext(GameContext);
  
  return (
    <>
      {gameModalState.CharlyGameModal && (  
        <div className='containerModalGame'>
          <ContainerArrowLink>
            <NavLink to={"/"}>
              <Arrow draggable="false" src={arrowReturn} alt="flèche retour" onClick={()=> toggleGameModals("closeGame")}/>
            </NavLink>        
          </ContainerArrowLink>
          <img src={ImageCharlyGame} alt='aperçu du jeu de Charly le caméléon' className='pictureGame' draggable="false"/>
          <button className='boutonPlayGame'>
            <NavLink to={'charly_le_cameleon'}> Jouer </NavLink>
          </button>
        </div>
      )}
    </>
  )
}

export default CharlyGameModal
