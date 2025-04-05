import { createContext, useEffect, useRef, useState } from "react";
import sound from "../assets/musique/sebi-la-gazelle-sound.mp3"
import { Howl } from "howler"
export const AudioContext = createContext()

const AudioContextProvider = (props) => {
    const [volumeOnOff, setVolumeOnOff] = useState(()=>{
        const saved = localStorage.getItem("volumeOnOff");
        return saved !== null ? JSON.parse(saved) : true; 
    })
    const [musiqueOnOff, setMusiqueOnOff] = useState(false)
    const soundRef = useRef(null); // Référence pour stocker l'instance Howl
    
    useEffect(() => {
        if(!soundRef.current){
            soundRef.current = new Howl({
                src:[sound],
                volume: 0.04, // volume de la musique 
                loop: true, // joue musique tourne en boucle
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("volumeOnOff", JSON.stringify(volumeOnOff));
    }, [volumeOnOff]);
    
    return(
        <AudioContext.Provider value={{volumeOnOff, setVolumeOnOff, setMusiqueOnOff, musiqueOnOff, soundRef}}>
            {props.children}
        </AudioContext.Provider>
    )
}
export default AudioContextProvider