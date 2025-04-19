import { useContext, useEffect, useState } from "react";
import TimmerComponent from "../Component/TimmerComponent";
import gsap from "gsap";
import imageJamesTheHowl from "../assets/img/james-full-body-without-fond.png"
import { TimerContext } from "../context/TimerContext";
import NavBarGame from "../Component/NavBarGame";
import { CursorContext } from "../context/CursorContext";
import { t } from "i18next";
import EndGame from "../Component/EndGame";
import James from "../Component/James";
import Sebi from "../Component/Sebi";
import styled from "styled-components";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const breakpoints = {
    mobile: '600px',
    tablet: '900px',
    medium: '1607px',
}
const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    answers: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "20px",
    },
    button: {
      background: "#f0f0f0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "10px 20px",
      fontSize: "18px",
      width: "80px",
      height: "80px",
      cursor: "pointer",
    },
    message: {
      marginTop: "20px",
      fontSize: "20px",
      color: "green",
    },
};
const ContainerGame = styled.div`
    display: flex;
`
const ContainerTimer = styled.div`
    // position:absolute;
    // left:1rem;
    // bottom:1rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const WhiteBoard = styled.div`
    width: 50vw;
    height: 50vh;
    // margin-block: auto;
    // margin-left: 20px;
    // margin-right: auto;
    margin:auto;
    background: white;
    @media (max-width: ${breakpoints.tablet}) {
        width:100%;
    }
`
const ContainerOperation = styled.div`
    width: 60%;
    font-size: 4rem;
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 2rem;
    }

`
const ContainerJamesTimer = styled.div`
    display:grid;
    grid-template-columns:1fr auto 1fr;    
    justify-content:space-around;
    align-items: center;
    margin-top:30px;
    @media (max-width: 900px) {
        grid-template-columns:auto 1fr;    
    }
`

const JamesGame = () => {
    const [question, setQuestion] = useState({});
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState(false);
    const [firstAnswer, setFirstAnswer] = useState(true);
    const [countAnswer, setCountAnswer] = useState(0);
    const [nbLifeMin, setNbLifeMin] = useState(0)
    const [nbLife, setNbLife] = useState(3)
    const {time, messageTimer, setTime} = useContext(TimerContext);
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    // Generate a random question
    const generateQuestion = () => {
        const num1 = getRandomInt(1, 10);
        const num2 = getRandomInt(1, 10);
        const operators = num2 > num1 ? ["+", "*"] : ["+", "-", "*"];

        const operator = operators[getRandomInt(0, operators.length - 1)];

        const correctAnswer = eval(`${num1} ${operator} ${num2}`); // Calculate result
        const incorrectAnswers = [
            correctAnswer + getRandomInt(1, 5),
            correctAnswer - getRandomInt(1, 5),
            correctAnswer + getRandomInt(6, 10),
        ].map((ans) => Math.abs(ans)); // Ensure no negative answers

        const shuffledAnswers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5);

        setQuestion({ num1, num2, operator, correctAnswer });
        setAnswers(shuffledAnswers);
    };


    // Handle answer click
    const handleAnswerClick = (answer) => {
        setFirstAnswer(false);
        setCountAnswer(countAnswer + 1);
        const button = document.querySelectorAll("button");
        if (answer === question.correctAnswer) {
            gsap.to(button, { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 });
            setMessage(true);
            setScore((prev) => prev + 1);
        } else {
            if(nbLifeMin < nbLife){
                setNbLifeMin((prev) => prev+1)
            }
            gsap.to(button, { x: 10, duration: 0.2, yoyo: true, repeat: 1 }); // Shake animation
            setMessage(false);
        }
    
        generateQuestion();
    };

    useEffect(() => {
        setScore(0);
        setTime(60);
        generateQuestion();
        setFirstAnswer(true);
    }, []);
    console.log(message);
    
    return(
        <>
            <div className="layout">     
                <NavBarGame points={score} nbLife={nbLife} nbLifeMin={nbLifeMin}/>
                { (time > 0 && time <= 60) && (nbLifeMin !== nbLife) ?  (
                    <>  

                        <ContainerGame>
                            <WhiteBoard>
                                <div style={styles.container}>
                                    <ContainerOperation>
                                        <h2>{question.num1} {question.operator} {question.num2}</h2>
                                        <p>=</p>
                                    </ContainerOperation>
                                    <div style={styles.answers}>
                                        {answers.map((answer, index) => (
                                            <button
                                            onMouseEnter={() => setCursorType(pointer)}
                                            onMouseLeave={() => setCursorType(cursor)} 
                                            onMouseDown={() => setCursorType(pointer)}
                                            onMouseUp={() => setCursorType(cursor)} 
                                            
                                            key={index}
                                            style={styles.button}
                                            onClick={() => handleAnswerClick(answer)}
                                            >
                                            {answer}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                        
                            </WhiteBoard>
                        </ContainerGame>
                        <ContainerJamesTimer>
                            <James firstAnswer={firstAnswer} message={message} key={countAnswer}/>
                            <ContainerTimer>
                                <TimmerComponent />
                            </ContainerTimer>
                        </ContainerJamesTimer>                           
                    
                    </>
                ):(
                    <>
                        <EndGame score={score} nameGame={"James le hiboux"}/>
                        <Sebi replique="sebiOnjoueEncore" repliqueSound="sebiReplique6"/>
                        {/* <div className="containerJames">
                        </div>     */}
                    </>
                )}

            </div>
        </>
    )
}

export default JamesGame