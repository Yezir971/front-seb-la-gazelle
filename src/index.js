import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/assets/style/style.css"
import UserContextProvider from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import TimerContextProvider from './context/TimerContext';
import GameContextProvider from './context/GameContext';
import AudioContextProvider from './context/AudioContext';
import CursorContextProvider from './context/CursorContext';
import LanguageProvider from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TimerContextProvider>
        <UserContextProvider>
          <GameContextProvider>
            <AudioContextProvider>
              <CursorContextProvider>
                <LanguageProvider>
                  <App />
                </LanguageProvider>
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
