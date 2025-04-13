import { useEffect, React, useContext } from 'react';
import { t } from "i18next";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import GameEndScreen from './EndGameScreen';
import styled from 'styled-components';
import { CursorContext } from '../context/CursorContext';
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
const RetryAgain = styled(NavLink)`
    background: #EF910F;
    color: white;
    border-radius: 32px;
    border: none;
    height: 60px;
    font-size: 32px;
    text-decoration: none;
    text-align:center;
    padding:12px;
`
export default function EndGame({score, nameGame}) {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
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

    useEffect(() => {
        setScoreUser(token);
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

            <RetryAgain 
            className="disconnectButton" 
            onClick={handleReplay}
            onMouseEnter={() => setCursorType(pointer)}
            onMouseLeave={() => setCursorType(cursor)} 
            onMouseDown={() => setCursorType(pointer)}
            onMouseUp={() => setCursorType(cursor)} 
            >
                {t("rejouer")}
            </RetryAgain>
        </AppWrapper>
    </div>
  )
}
