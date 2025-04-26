import styled from "styled-components"
import ReturnLogo from "../Component/ReturnLogo"
import { AudioContext } from "../context/AudioContext"
import { useContext } from "react"
import cadre  from '../assets/img/sub-backgroung/cadre.webp'
import { CursorContext } from "../context/CursorContext"
import ButtonSwitchEnFr from "../Component/ButtonSwitchEnFr"
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom"


const Cadre = styled.div`
    aspect-ratio: 1 / 1; /* Maintient un carré parfait */
    background: url(${cadre}) no-repeat center center;
    background-size: contain; /* Ajuste l'image sans la couper */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: -124px auto;    
    width:80%;

    @media (max-width: 900px) {
        width:100%;
        margin: 0px;
        background-size: cover; 
    }

    @media screen and (min-width: 1000px){
        margin: -20% auto;    
    }



`
const ContainerListe = styled.ul`
    width:50%;
    height:50%;
    list-style: none;
    color: white;
    background-color: rgb(224 217 158 / 49%);
    gap: 41px;
    display: grid;
    grid-template-columns: auto auto;
    padding: 66px 26px;
    border-radius: 23px;

    @media (max-width: 900px) {
        width:80%;
        height:80%;
        gap:8px;
        padding: 16px 8px;
        grid-template-columns: auto ;
    }


`

const ListeItem = styled.li`
    background-color: rgb(69 145 7 / 77%);
    cursor:pointer;
    border-radius:23px;
    padding:16px;
    font-weight:bold;
    font-size:1.2rem;
    display:flex;
    align-items:center;
    justify-content:center;
    text-transform:uppercase;

    @media (max-width: 900px) {
        font-size:1rem;
    }
    @media (max-width: 400px) {
        padding: 8px 1px;
    }
    a{
        text-decoration:none;
        color:white;
    }
`
const ListeItemPolitique = styled.li`
    background-color: rgb(69 145 7 / 77%);
    cursor:pointer;
    border-radius:23px;
    padding:16px;
    font-weight:bold;
    font-size:1rem;
    justify-content:center;
    display:flex;
    align-items:center;
    @media (max-width: 900px) {
        font-size:1rem;
    }
    a{
        text-decoration:none;
        color:white;
    }
`
const Settings = () => {
    const {volumeOnOff, setVolumeOnOff, setMusiqueOnOff, musiqueOnOff, soundRef} = useContext(AudioContext)
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    const {t} = useTranslation()
    const handleMouse = (e, type) => () => setCursorType(type)
    
    const volume = () =>{
        setVolumeOnOff(prev => !prev)
    }
    // musique de fond 
    const musique = () => {
        setMusiqueOnOff(!musiqueOnOff)
        if (soundRef.current) {
            if(musiqueOnOff){
                soundRef.current.pause()
            }else{
                soundRef.current.play()
            }
        }
    }

    return(
        <>  
            <ReturnLogo />
            <Cadre>
                <ContainerListe>
                    <ListeItem 
                    onMouseEnter={handleMouse(null, pointer)}
                    onMouseLeave={handleMouse(null, cursor)}
                    onClick={volume}>{t('volume')} {volumeOnOff ? "🔊" : "🔇"}</ListeItem>
                    <ListeItem 
                    onMouseEnter={handleMouse(null, pointer)}
                    onMouseLeave={handleMouse(null, cursor)}
                    onClick={musique}>{t('musique')} {musiqueOnOff ? "🎵" : "🎶"} </ListeItem>
                    <ListeItem>
                        <NavLink 
                        onMouseEnter={handleMouse(null, pointer)}
                        onMouseLeave={handleMouse(null, cursor)}
                        onMouseDown={handleMouse(null, pointer)}
                        onMouseUp={handleMouse(null, cursor)}
                        to="/mention" aria-label="Page mention légale">
                            {t('mentions')}
                        </NavLink>
                    </ListeItem>
                    <ListeItem>
                        <ButtonSwitchEnFr />
                    </ListeItem>
                    <ListeItemPolitique>
                        <NavLink 
                        onMouseEnter={handleMouse(null, pointer)}
                        onMouseLeave={handleMouse(null, cursor)}
                        onMouseDown={handleMouse(null, pointer)}
                        onMouseUp={handleMouse(null, cursor)}
                        to="/politique" aria-label="Page politique de confidentialité">
                            {t('politique')}
                        </NavLink>
                    </ListeItemPolitique>
                </ContainerListe>
            </Cadre>
        </>
    )
}

export default Settings