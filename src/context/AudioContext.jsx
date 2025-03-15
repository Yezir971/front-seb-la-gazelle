import { createContext, useEffect, useRef, useState } from "react";
import sound from "../assets/audios/les-amis-de-sebi.mp3"
import { Howl } from "howler"
export const AudioContext = createContext()

const AudioContextProvider = (props) => {
    const [volumeOnOff, setVolumeOnOff] = useState(true)
    const [musiqueOnOff, setMusiqueOnOff] = useState(false)
    const soundRef = useRef(null); // Référence pour stocker l'instance Howl


    useEffect(() => {
        if(!soundRef.current){
            soundRef.current = new Howl({
                src:[sound],
                volume: 0.1, // volume de la musique 
                loop: true, // joue musique tourne en boucle
            })
        }
    }, [])
    return(
        <AudioContext.Provider value={{volumeOnOff, setVolumeOnOff, setMusiqueOnOff, musiqueOnOff, soundRef }}>
            {props.children}
        </AudioContext.Provider>
    )
}
export default AudioContextProvider