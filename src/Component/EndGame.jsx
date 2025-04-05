import { useEffect, React } from 'react';
import { t } from "i18next";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import GameEndScreen from './EndGameScreen';
import styled from 'styled-components';
import generatePrompt from "../data/promptCaracteres";

const AppWrapper = styled.div`
    display: flex;
    flex-direction:column;
    gap:16px;
    align-items: center;
    justify-content: center;
    max-width:400px;
    padding:32px;
    margin:auto;
    background:rgba(255, 204, 0, 0.58);
    border-radius:30px;
`;
export default function EndGame({score, nameGame}) {
    const token = Cookies.get('token');

    const setScoreUser = async (token) => {
        if(!token) return;
        try{
            const body = {
                'namegame': nameGame,
                'score': score
            }
            const response = await fetch('https://orange-wolf-959534.hostingersite.com/api/setscore', {
                method: 'POST',
                headers:{
                    "Authorization": `Bearer ${token}`,
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(body)
            })
            const data = await response.json();
            if(data){
                console.log(data);
            }
        }catch(e){
            console.log(e);
        }
    }

    const fetchImage = async (token) => {
        if(!token) return;
        try {
            const prompt = generatePrompt()
            const response = await fetch('https://orange-wolf-959534.hostingersite.com/api/make-picture/user',{
                method: 'POST',
                headers:{
                    "Authorization": `Bearer ${token}`,
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(prompt)
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            throw new Error("Erreur de l'api au moment de la génération de l'image");
        }
    }
    
    useEffect(() => {
        if(score > 15){
            fetchImage(token);
        }
        // setScoreUser(token);
    },[]);

    const handleReplay = () => {
        window.location.reload();
    };

  return (
    <div>
        <AppWrapper>
            <h3>{nameGame}</h3>
            <table>
                <th>{t("Utilisateur")} :{score}</th>
                <th>Score</th>
            </table>
            <GameEndScreen score={score} />
            <button>
                <NavLink onClick={handleReplay}>{t("rejouer")}</NavLink>
            </button>
        </AppWrapper>
    </div>
  )
}
