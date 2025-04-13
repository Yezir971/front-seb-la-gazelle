import styled from "styled-components";
import Stars from "./Stars";
import ScoreJauge from "./ScoreJauge";
import { useEffect, useState } from "react";
import generatePrompt from "../data/promptCaracteres";
import Cookies from "js-cookie";


const GameEndWrapper = styled.div`
  text-align: center;
  font-family: 'Comic Sans MS', cursive;
  background: #fffae3;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
`;

const Title = styled.h2`
  color: #ff6600;
  font-size:1.6rem;
`;

const ScoreText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #444;
`;

const GameEndScreen = ({ score }) => {

    // généraation de l'image en cas de réussite 
    const token = Cookies.get('token');
    
    const fetchImage = async (token) => {
        if(!token) return;
        try {
            const prompt = generatePrompt()
            console.log(JSON.stringify(prompt))
            const response = await fetch('https://orange-wolf-959534.hostingersite.com/api/make-picture/user',{
                method: 'POST',
                headers:{
                    "Authorization": `Bearer ${token}`,
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(prompt)
                // body: JSON.stringify({"prompt":"Sebi, the central figure, is a kawaii-style anthropomorphic gazelle with a light brown coat and white accents on her face, belly, and tail tip. She has a large head, expressive eyes, and soft pink inner ears. Seated and reading a colorful, glowing book, her calm, absorbed expression adds to the fairytale atmosphere."})
                
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
    },[]);
    const getMessage = (score) => {
        if (score >= 0 && score <= 7) return "Tu peux mieux faire...";
        if (score > 7 && score <= 14) return "Bien joué, continue comme ça ! 💪";
        if (score > 14 && score < 20) return "Superbe performance ! ⭐";
        if (score >= 20) return "Bravo ! 🎉";
        return ""; 
    };
    return (
        <GameEndWrapper>
            <Title>{getMessage(score)}</Title>
            <ScoreJauge score={score} />
            <Stars score={score} />
            <ScoreText>Score : {score} / 20</ScoreText>
        </GameEndWrapper>
    );
};

export default GameEndScreen;
