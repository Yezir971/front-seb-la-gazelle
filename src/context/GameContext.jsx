import React, {createContext, useState} from 'react'

export const GameContext = createContext()

const GameContextProvider = (props) => {
        const [gameModalState, setGameModalState] = useState({
            JamesGameModal: false,
            CharlyGameModal: false,
            showAllAnimals: true,
        })
    
    
        const toggleGameModals = modal => {
            switch (modal) {
                case "JamesGame":
                    setGameModalState({
                        JamesGameModal: true,
                        CharlyGameModal: false,
                        showAllAnimals: false,
                    })
                    break;
                case "CharlyGame":
                    setGameModalState({
                        JamesGameModal: false,
                        CharlyGameModal: true,
                        showAllAnimals: false,
                    })
                    break;
                case "closeGame":
                    setGameModalState({
                        JamesGameModal: false,
                        CharlyGameModal: false,
                        showAllAnimals: true,
                    })
                    break;
                default:
                    break;
            }
        }
  return (
        <GameContext.Provider value={{gameModalState, toggleGameModals}}>
            {props.children}
        </GameContext.Provider>
  )
}

export default GameContextProvider
