import { useEffect, React } from 'react';
import { t } from "i18next";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

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

    useEffect(() => {
        setScoreUser(token);
    },[]);

    const handleReplay = () => {
        window.location.reload();
    };

  return (
    <div>
        <h3>James le hiboux</h3>
        <table>
            <th>{t("Utilisateur")} :{score}</th>
            <th>Score</th>
        </table>
        <button>
            <NavLink onClick={handleReplay}>{t("rejouer")}</NavLink>
        </button>
    </div>
  )
}
