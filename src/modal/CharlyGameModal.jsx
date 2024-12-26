import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';

const CharlyGameModal = () => {
  const {gameModalState, toggleGameModals } = useContext(GameContext);
  
  return (
    <>
      {gameModalState.CharlyGameModal && (  
        <div>
          <p>Vous êtes avec Charly</p>
          <button onClick={()=> toggleGameModals("CloseGame")}></button>
        </div>
      )}
    </>
  )
}

export default CharlyGameModal
