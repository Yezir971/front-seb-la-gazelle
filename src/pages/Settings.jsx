import styled from "styled-components"
import ReturLogo from "../Component/ReturnLogo"
import { AudioContext } from "../context/AudioContext"
import { useContext, useEffect } from "react"
import cadre  from '../assets/img/cadre.png'

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
    console.log(cadre)
    const volume = () =>{
        setVolumeOnOff(!volumeOnOff)
    }
    // musique de fond 
    const musique = () => {
        setMusiqueOnOff(!musiqueOnOff)
        console.log(soundRef.current)
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
                    <ListeItem onClick={volume}>VOLUME {volumeOnOff ? "🔊" : "🔇"}</ListeItem>
                    <ListeItem onClick={musique}>MUSIQUE {musiqueOnOff ? "🎵" : "🎶"} </ListeItem>
                    <ListeItem>MENTIONS LEGALES</ListeItem>
                    <ListeItem>LANGUES</ListeItem>
                    <ListeItemPolitique>POLITIQUES DE CONFIDENTIALITES</ListeItemPolitique>
                </ContainerListe>
            </Cadre>
        </>
    )
}

export default Settings