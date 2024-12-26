import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/assets/style/style.css"
import UserContextProvider from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import TimerContextProvider from './context/TimerContext';
<<<<<<< HEAD
import GameContextProvider from './context/GameContext';
=======

>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TimerContextProvider>
        <UserContextProvider>
<<<<<<< HEAD
          <GameContextProvider>
          <App />
          </GameContextProvider>
=======
          <App />
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
        </UserContextProvider>
      </TimerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
