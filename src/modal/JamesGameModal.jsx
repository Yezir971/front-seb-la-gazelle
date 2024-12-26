import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';
import { NavLink } from 'react-router-dom'

const JamesGameModal = () => {
  const {gameModalState, toggleGameModals } = useContext(GameContext);

  return (
    <>
    {gameModalState.JamesGameModal && (  
      <div>
        <p>Vous êtes avec Charly</p>
        <NavLink to={'james_le_hibou'}> Jouer </NavLink>
        <button onClick={()=> toggleGameModals("CloseGame")}></button>
      </div>
    )}
  </>
  )
}

export default JamesGameModal
