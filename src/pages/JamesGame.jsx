import { useContext, useEffect, useState } from "react";
import TimmerComponent from "../Component/TimmerComponent";
import gsap from "gsap";
<<<<<<< HEAD
import imageJamesTheHowl from "../assets/img/james-avatar.png"
=======
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
import { TimerContext } from "../context/TimerContext";
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
<<<<<<< HEAD
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
=======
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
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
<<<<<<< HEAD
      width: "80px",
      height: "80px",
=======
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
      cursor: "pointer",
    },
    message: {
      marginTop: "20px",
      fontSize: "20px",
      color: "green",
    },
};

const JamesGame = () => {
    const [question, setQuestion] = useState({});
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("");
<<<<<<< HEAD
=======

>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
    const {time, messageTimer} = useContext(TimerContext)

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
        // setMessage("");
    };

    // Handle answer click
    const handleAnswerClick = (answer) => {
        const button = document.querySelectorAll("button");
        if (answer === question.correctAnswer) {
            gsap.to(button, { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 });
<<<<<<< HEAD
            setMessage("Réponse correct! 🎉");
            setScore((prev) => prev + 1);
        } else {
            gsap.to(button, { x: 10, duration: 0.2, yoyo: true, repeat: 1 }); // Shake animation
            setMessage("Oops! Mauvaise réponse. 😅");
=======
            setMessage("Correct! 🎉");
            setScore((prev) => prev + 1);
        } else {
            gsap.to(button, { x: 10, duration: 0.2, yoyo: true, repeat: 1 }); // Shake animation
            setMessage("Oops! Try again. 😅");
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
        }
    
        generateQuestion();
    };

    // on généère la question a chaque chargement de page 
    useEffect(() => {
        generateQuestion();
    }, []);

    return(
        <>
<<<<<<< HEAD
        <div className="layout">     
            <h1 className="gameTitle">Aide James le Hiboux à résoudre les calculs</h1>
            <div className="containerGame">
                <div className="whiteBoard">
                    { time > 0 ? (
                        <div style={styles.container}>
                            <div className="containerOperation">
                                <h2>
                                {question.num1} {question.operator} {question.num2}
                                </h2>
                                <p>=</p>
                            </div>
                            <div style={styles.answers}>
                            {answers.map((answer, index) => (
                                <button
                                key={index}
                                style={styles.button}
                                onClick={() => handleAnswerClick(answer)}
                                >
                                {answer}
                                </button>
                            ))}
                            </div>
                            <h3>Score: {score}</h3>
                        </div>
                    ):(
                        <div>
                            <h3>Score: {score}</h3>
                            <table>
                                <th>User</th>
                                <th>Score</th>
                            </table>
                        </div>
                    )}
                </div>
                <TimmerComponent />
            </div>
            <div className="containerJames">
                <img className="jamesTheHowl" src={ imageJamesTheHowl } alt="James le hibou" />
                <div className="talkbubbleJames">
                    { time > 0 ? (
                        <div className="message" style={styles.message}>{message}</div>
                    ):
                    <p className="textEndTimer">{messageTimer}</p>
                    }
                </div>
            </div>
        </div>
=======
        <TimmerComponent />
        { time > 0 && (
            <div style={styles.container}>
                <h1>Aide James le Hibooux à résoudre les calculs</h1>
                <h2>
                combien fait {question.num1} {question.operator} {question.num2}?
                </h2>
                <div style={styles.answers}>
                {answers.map((answer, index) => (
                    <button
                    key={index}
                    style={styles.button}
                    onClick={() => handleAnswerClick(answer)}
                    >
                    {answer}
                    </button>
                ))}
                </div>
                <div className="message" style={styles.message}>{message}</div>
                <h3>Score: {score}</h3>
            </div>
        )}
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
        </>
    )
}

export default JamesGame