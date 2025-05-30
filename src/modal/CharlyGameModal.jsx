import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';
import { NavLink } from 'react-router-dom';
import ImageCharlyGame from "../assets/img/charly-game/charly-game-1.webp";
import  arrowReturn  from "../assets/img/picto/Vector-return.svg"
import styled from 'styled-components';
import { CursorContext } from '../context/CursorContext';
import { LvlGameContext } from '../context/LvlGameContext';
import { t } from "i18next";
import Sebi from "../Component/Sebi"
const Arrow = styled.img`
  width:30px;
  height:30px;
  position:absolute;
  top:0px;
  left:0px;

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
const LevelGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`
const ContainerButtonLevel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonLevel = styled.button`
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.5rem;
    margin: 10px;
    @media (max-width: 768px) {
        padding: 5px 10px;
    }    
    @media (max-width: 400px) {
        font-size: 1rem;
    }
`
const CharlyGameModal = () => {
  const {gameModalState, toggleGameModals } = useContext(GameContext);
  // const {ResetCursor} = useContext(CursorContext)
  // ResetCursor()
  const { setCursorType, pointer, cursor } = useContext(CursorContext);
  const { nbLife, setNbLife } = useContext(LvlGameContext);

  const getButtonStyle = (level) => ({
    backgroundColor: nbLife === level ? 'orange' : 'gray',
  });
  
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
            <LevelGame>
              <div className='containerLevelGame'>
                <h2 className='titleLevelGame'> {t('choisir_niveau')} </h2>
                <ContainerButtonLevel>
                  <ButtonLevel 
                    style={getButtonStyle(5)}
                    onMouseEnter={() => setCursorType(pointer)}
                    onMouseLeave={() => setCursorType(cursor)} 
                    onMouseDown={() => setCursorType(pointer)}
                    onMouseUp={() => setCursorType(cursor)} 
                    onClick={() => setNbLife(5)}> {t('facile')} </ButtonLevel>
                  <ButtonLevel 
                    style={getButtonStyle(4)} 
                    onMouseEnter={() => setCursorType(pointer)}
                    onMouseLeave={() => setCursorType(cursor)} 
                    onMouseDown={() => setCursorType(pointer)}
                    onMouseUp={() => setCursorType(cursor)} 
                    onClick={() => setNbLife(4)}> {t('moyen')} </ButtonLevel>
                  <ButtonLevel 
                    style={getButtonStyle(3)} 
                    onMouseEnter={() => setCursorType(pointer)}
                    onMouseLeave={() => setCursorType(cursor)} 
                    onMouseDown={() => setCursorType(pointer)}
                    onMouseUp={() => setCursorType(cursor)} 
                    onClick={() => setNbLife(3)}> {t('difficile')} </ButtonLevel>
                </ContainerButtonLevel>
              </div>
            </LevelGame>
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
