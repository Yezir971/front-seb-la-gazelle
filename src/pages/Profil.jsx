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
const CadreEdit = styled.div`
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
    flex-direction: column;
    margin:auto;
`
const ContainerUser = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ContainerAvatar = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: relative;
`
const EditButton = styled.button`
    position: absolute;
    top: 50%;
    right: 39%;
    border: none;
    border-radius: 5px;
    background: #EF910F;
    color: #fff;
    padding: 5px;
`
const Avatar= styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

const ContainerEdit = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
`
const ContainerPicture = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    gap: 10px;
    width:400px;
    height:280px;
    padding-inline: 10px;
    overflow-y: scroll;
    scrollbar-color: #459107 #fff;
    scrollbar-width: auto;
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`
const ReturnButton = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px;
    margin-bottom: 20px;
    background: #EF910F;
    color: #fff;
`
const Score = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px;
    width: 400px;
    h2{
        margin-bottom: 10px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: space-around;
        justify-content: center;
        background: #EF910F;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        width: 300px;
        p{
            margin-bottom: 5px;
        }
    }
`
const Profil = () => {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    const { isLoading, user } = useContext(AuthContext);
    const token = Cookies.get('token');
    const [score, setScore] = useState(null);
    const [edit, setEdit] = useState(false);
    const [avatar, setAvatar] = useState(null);
    
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
    },[!edit])

    const totalScoreForJamesGame = () => {
        const jamesGame = score.scores.filter(s => s.name_game === "James le hiboux");
        if(jamesGame){
            const scoreForJamesGame = jamesGame.reduce((acc, s) => acc + s.score, 0);
            return scoreForJamesGame
        }else{
            return
        }
    }
    const bestScoreForJamesGame = () => {
        const jamesGame = score.scores.filter(s => s.name_game === "James le hiboux");
        if(jamesGame){
            const bestScoreForJamesGame = jamesGame.reduce((acc, s) => Math.max(acc, s.score), 0);
            return bestScoreForJamesGame
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
    const bestScoreForCharlyGame = () => {
        const CharlyGame = score.scores.filter(s => s.name_game === "Charly le caméléon");
        if(CharlyGame){
            const bestScoreForCharlyGame = CharlyGame.reduce((acc, s) => Math.max(acc, s.score), 0);
            return bestScoreForCharlyGame
        }else{
            return
        }
    }
    const handleEdit = () => {
        setEdit(true);
    }
    const handleClose = () => {
        setEdit(false);
    }
    useEffect(() => {
        setEdit(false);
    }, []);

    useEffect(() => {
        showAvatar(token);
    }, [handleEdit]);

    const showAvatar = async (token) => {
        if (!token) return;
        try{
            const response = await fetch(`https://orange-wolf-959534.hostingersite.com/api/pictures/user`, {
                method: 'GET',
                headers:{
                    "Authorization": `Bearer ${token}`,
                    "Content-Type":"application/json",
                },
            });
            const data = await response.json();
            if(response.status === 404){
                setAvatar(null);
            }else{
                if(data){
                    setAvatar(data);
                }
            }
        }catch(e){
            console.log(e);
        }
    } 

    const editAvatar = async (id, token) => {
        if (!token) return;
        try{
            const response = await fetch(`https://orange-wolf-959534.hostingersite.com/api/picture/setavatar/${id}`, {
                method: 'PUT',
                headers:{
                    "Authorization": `Bearer ${token}`,
                    "Content-Type":"application/json",
                },
            });
            
            if(response.status === 200){
                setEdit(false);
                window.location.reload();
            }
        }catch(e){
            console.log(e);
        }
    } 
    return (
        <ContainerProfil>
            <NavBarProfil />
            {!isLoading && user ?
                <ContainerInfoProfil>
                    {!edit ?
                        <>
                        <ContainerUser>
                            <ContainerAvatar>
                                {user.avatar == null ? <Avatar src={defaultUser} alt="avatar"/> : <Avatar src={`https://orange-wolf-959534.hostingersite.com/${user.avatar.src}`} alt="avatar"/>}
                                <EditButton 
                                    onClick={handleEdit}
                                    onMouseEnter={() => setCursorType(pointer)}
                                    onMouseLeave={() => setCursorType(cursor)} 
                                    onMouseDown={() => setCursorType(pointer)}
                                    onMouseUp={() => setCursorType(cursor)} 
                                >Modifier</EditButton>
                            </ContainerAvatar>
                            <h2>{user.name}</h2>
                        </ContainerUser>
                        <Cadre>
                            {score ?
                                <div>
                                    <Score>
                                        <h2>Total score James le hiboux:</h2>
                                        <div>
                                            {totalScoreForJamesGame()  &&
                                                <p>Total des scores : {totalScoreForJamesGame()} pts</p>
                                            }
                                            {bestScoreForJamesGame() &&
                                                <p>Meilleur score : {bestScoreForJamesGame()} pts</p>
                                            }
                                        </div>
                                    </Score>
                                    <Score>
                                        <h2>Total score Charly le caméléon:</h2>
                                        <div>
                                            {totalScoreForCharlyGame() &&
                                                <p>Total des scores : {totalScoreForCharlyGame()} pts</p>
                                            }
                                            {bestScoreForCharlyGame() &&
                                                <p>Meilleur score : {bestScoreForCharlyGame()} pts</p>
                                            }
                                        </div>
                                    </Score>
                                </div>
                                :   
                                <div>
                                    <h2>Score</h2>
                                    <p>Joue à des jeux pour avoir tes scores</p>  
                                </div>
                            }
                        </Cadre>
                        </>
                      :
                        <ContainerEdit>
                            <CadreEdit>
                                <ReturnButton 
                                    onClick={handleClose}
                                    onMouseEnter={() => setCursorType(pointer)}
                                    onMouseLeave={() => setCursorType(cursor)} 
                                    onMouseDown={() => setCursorType(pointer)}
                                    onMouseUp={() => setCursorType(cursor)} 
                                >Retour</ReturnButton>
                                <ContainerPicture>
                                    {avatar && avatar.pictures && avatar.pictures.map((element) => (
                                        <img
                                            key={element.id}
                                            src={`https://orange-wolf-959534.hostingersite.com/${element.src}`}
                                            alt=""
                                            onClick={() => editAvatar(element.id, token)}
                                            onMouseEnter={() => setCursorType(pointer)}
                                            onMouseLeave={() => setCursorType(cursor)} 
                                            onMouseDown={() => setCursorType(pointer)}
                                        />
                                    ))}
                                </ContainerPicture>
                            </CadreEdit>
                        </ContainerEdit>
                      }
                </ContainerInfoProfil>
                : <p>Chargement...</p>
            }
            <Sebi replique="sebiProfil" repliqueSound="sebiReplique9"/>
        </ContainerProfil>
    );
}

export default Profil;