import { useContext, useState, useEffect } from "react";
import { CursorContext } from "../context/CursorContext";
import { AuthContext } from "../context/AuthContext";
import NavBarProfil from "../Component/NavBarProfil";
import styled from "styled-components";
import cadre  from '../assets/img/cadre.png'
import defaultUser from '../assets/img/default-user.png'
import Sebi from "../Component/Sebi"
import Cookies from "js-cookie";
const ContainerProfil = styled.div`
    width:100vw;
    height:100vh;
    background:rgba(217, 217, 217, 0.4);
`

const ContainerInfoProfil = styled.div`
    display:grid;
    grid-template-columns:2fr 4fr;
    justify-content:center;
    align-items:center;
`
const Cadre = styled.div`
    width: 90vw;
    max-width: 780px;
    height: 80vh;
    aspect-ratio: 1 / 1; /* Maintient un carré parfait */
    background: url(${cadre}) no-repeat center center;
    background-size: contain; /* Ajuste l'image sans la couper */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin:auto;
`
const ContainerUser = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Profil = () => {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    const { isLoading, user } = useContext(AuthContext);
    const token = Cookies.get('token');
    const [score, setScore] = useState(null);
    console.log(token);
    
    const scoreUser = async (token) => {
        if (!token) return;
        try{
            const response = await fetch(`https://orange-wolf-959534.hostingersite.com/api/scores/user`, {
                method: 'GET',
                headers:{
                    "Authorization": `Bearer ${token}`,
                    "Content-Type":"application/json",
                },
            });
            const data = await response.json();
            if(response.status === 404){
                setScore(null);
            }else{
                if(data){
                    setScore(data);
                }
            }
        }catch(e){
            console.log(e);
        }
    }
    
    useEffect(() => {
        scoreUser(token);
    },[user])

    if(score){
        console.log(score)
    }

    const totalScoreForJamesGame = () => {
        const jamesGame = score.scores.filter(s => s.name_game === "James le hiboux");
        if(jamesGame){
            const scoreForJamesGame = jamesGame.reduce((acc, s) => acc + s.score, 0);
            return scoreForJamesGame
        }else{
            return
        }
    }
    const totalScoreForCharlyGame = () => {
        const CharlyGame = score.scores.filter(s => s.name_game === "Charly le caméléon");
        if(CharlyGame){
            const scoreForCharlyGame = CharlyGame.reduce((acc, s) => acc + s.score, 0);
            return scoreForCharlyGame 
        }else{
            return
        }
    }
    return (
        <ContainerProfil>
            <NavBarProfil />
            {!isLoading && user ?
                <ContainerInfoProfil>
                    <ContainerUser>
                        {user.avatar == null ? <img src={defaultUser} alt="avatar" className="avatarProfil"/> : <img src={user.avatar} alt="avatar" className="avatarProfil"/>}
                        <h2>{user.name}</h2>
                    </ContainerUser>
                    <Cadre>
                        {score ?
                            <div>
                                <div>
                                    <h2>Total score :</h2>
                                {totalScoreForJamesGame()  &&
                                    <p>Total score pour James le Hiboux : {totalScoreForJamesGame()}</p>
                                }
                                {totalScoreForCharlyGame() &&
                                    <p>Total score pour Charly le caméléon : {totalScoreForCharlyGame()}</p>
                                } 
                                </div>
                            </div>
                            :   
                            <div>
                                <h2>Score</h2>
                                <p>Joue à des jeux pour avoir tes scores</p>  
                            </div>
                        }
                    </Cadre>
                </ContainerInfoProfil>
                : <p>Chargement...</p>
            }
            <Sebi replique="sebiProfil" repliqueSound="sebiReplique9"/>
        </ContainerProfil>
    );
}

export default Profil;