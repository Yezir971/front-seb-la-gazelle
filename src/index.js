import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/assets/style/style.css"
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './context/UserContext';
import TimerContextProvider from './context/TimerContext';
import GameContextProvider from './context/GameContext';
import AudioContextProvider from './context/AudioContext';
import CursorContextProvider from './context/CursorContext';
import AuthContextProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TimerContextProvider>
        <UserContextProvider>
          <GameContextProvider>
            <AudioContextProvider>
              <CursorContextProvider>
                <AuthContextProvider>
                  <App />
                </AuthContextProvider>
              </CursorContextProvider>
            </AudioContextProvider>
          </GameContextProvider>
        </UserContextProvider>
      </TimerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
