import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';

const ShowAllAnimals = () => {
    const {gameModalState, toggleGameModals } = useContext(GameContext);
  return (
    <>
     {gameModalState.showAllAnimals && (  
        <div>
            <p>Vous voyez tout les animaux</p>
            <button  onClick={()=> toggleGameModals("JamesGame")}>Aller voir James</button>
            <button  onClick={()=> toggleGameModals("CharlyGame")}>Aller voir Charly</button>
        </div>
     )}
    </>
  )
}

export default ShowAllAnimals
