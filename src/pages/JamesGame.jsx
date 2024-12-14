import { useContext, useEffect, useState } from "react";
import TimmerComponent from "../Component/TimmerComponent";
import gsap from "gsap";
import { TimerContext } from "../context/TimerContext";
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
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
            setMessage("Correct! 🎉");
            setScore((prev) => prev + 1);
        } else {
            gsap.to(button, { x: 10, duration: 0.2, yoyo: true, repeat: 1 }); // Shake animation
            setMessage("Oops! Try again. 😅");
        }
    
        generateQuestion();
    };

    // on généère la question a chaque chargement de page 
    useEffect(() => {
        generateQuestion();
    }, []);

    return(
        <>
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
        </>
    )
}

export default JamesGame