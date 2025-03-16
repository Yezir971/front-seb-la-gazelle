import styled from "styled-components"
import ReturLogo from "../Component/ReturnLogo"
import { AudioContext } from "../context/AudioContext"
import { useContext } from "react"
import cadre  from '../assets/img/cadre.png'
import { CursorContext } from "../context/CursorContext"
import ButtonSwitchEnFr from "../Component/ButtonSwitchEnFr"
import { useTranslation } from "react-i18next";


const Cadre = styled.div`
    width: 90vw;
    max-width: 780px;
    height: auto;
    aspect-ratio: 1 / 1; /* Maintient un carré parfait */
    background: url(${cadre}) no-repeat center center;
    background-size: contain; /* Ajuste l'image sans la couper */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin:auto;
    



`
const ContainerListe = styled.ul`
    // list-style:none;
    // color:white;
    // text-tranform:uppercase;
    // background-color: rgb(224 217 158 / 49%);
    // backdrop-filter: blur(10px);
    // width:945px;
    // height:482px;
    // margin: auto;
    // gap:41px;
    // display:grid;
    // grid-template-columns: 1fr 1fr ;
    // padding:66px 26px;
    // border-radius:23px;



    list-style: none;
    color: white;
    text-tranform: uppercase;
    background-color: rgb(224 217 158 / 49%);
    gap: 41px;
    display: grid;
    grid-template-columns: 234px 234px;
    padding: 66px 26px;
    border-radius: 23px;

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
`
const ListeItemPolitique = styled.li`
    background-color: rgb(69 145 7 / 77%);
    cursor:pointer;
    border-radius:23px;
    padding:16px;
    font-weight:bold;
    font-size:1rem;
`
const Settings = () => {
    const {volumeOnOff, setVolumeOnOff, setMusiqueOnOff, musiqueOnOff, soundRef} = useContext(AudioContext)
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    const {t} = useTranslation()

    
    const volume = () =>{
        setVolumeOnOff(!volumeOnOff)
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
            <ReturLogo />
            <Cadre>
                <ContainerListe>
                    <ListeItem onClick={volume}>{t('volume')} {volumeOnOff ? "🔊" : "🔇"}</ListeItem>
                    <ListeItem onClick={musique}>{t('musique')} {musiqueOnOff ? "🎵" : "🎶"} </ListeItem>
                    <ListeItem>{t('mentions')}</ListeItem>
                    <ListeItem><ButtonSwitchEnFr /></ListeItem>
                    <ListeItemPolitique>{t('politique')}</ListeItemPolitique>
                </ContainerListe>
            </Cadre>
        </>
    )
}

export default Settings