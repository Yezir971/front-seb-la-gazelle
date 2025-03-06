import styled from "styled-components"
import ReturLogo from "../Component/ReturnLogo"
import { useState } from "react"

const ContainerListe = styled.ul`
    list-style:none;
    color:white;
    text-tranform:uppercase;
    background-color: rgb(224 217 158 / 49%);
    backdrop-filter: blur(10px);
    width:945px;
    height:482px;
    margin: auto;
    gap:41px;
    display:grid;
    grid-template-columns: 1fr 1fr ;
    padding:66px 26px;
    border-radius:23px;
`
const ListeItem = styled.li`
    background-color: rgb(69 145 7 / 77%);
    cursor:pointer;
    border-radius:23px;
    padding:16px;
    font-weight:bold;
    font-size:2.18rem;
    display:flex;
    align-items:center;
`
const ListeItemPolitique = styled.li`
    background-color: rgb(69 145 7 / 77%);
    cursor:pointer;
    border-radius:23px;
    padding:16px;
    font-weight:bold;
    font-size:1.5rem;
`
const Settings = () => {
    const [volumeOnOff, setVolumeOnOff] = useState(true)
    const [musiqueOnOff, setMusiqueOnOff] = useState(true)
    const volume = () =>{
        setVolumeOnOff(!volumeOnOff)
    }
    const musique = () => {
        setMusiqueOnOff(!musiqueOnOff)
    }
    return(
        <>  
            <ReturLogo />
            <ContainerListe>
                <ListeItem onClick={volume}>VOLUME {volumeOnOff ? "🔊" : "🔇"}</ListeItem>
                <ListeItem onClick={musique}>MUSIQUE {musiqueOnOff ? "🎵" : "🎶"} </ListeItem>
                <ListeItem>MENTIONS LEGALES</ListeItem>
                <ListeItem>LANGUES</ListeItem>
                <ListeItemPolitique>POLITIQUES DE CONFIDENTIALITES</ListeItemPolitique>
            </ContainerListe>

        </>
    )
}

export default Settings