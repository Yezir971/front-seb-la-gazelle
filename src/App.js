// import Navbar from "./Component/Navbar";
// import SignInModal from "./modal/SignUpModal";
// import SignUpModal from "./modal/SignInModal";
import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import JamesGame from './pages/JamesGame'
import CharlyGames from "./pages/CharlyGame";
import BackgroundWrapper from "./Component/BackgroundWrapper";
import Settings from "./pages/Settings";
import styled, { createGlobalStyle } from "styled-components";
import Page404 from "./pages/Page404";
import Profil from "./pages/Profil";
import { ToastContainer } from "react-toastify";
import Politique from "./pages/Politique";
import Mention from "./pages/Mention";

const GlobalStyle=createGlobalStyle`
  *, body{
    cursor: none !important
  }
`

const LandscapeOverlay = styled.div`
  display: none;

  @media (orientation: landscape) and (max-width: 900px) {
    display: flex;
    position: fixed;
    inset: 0;
    background-color:rgba(0, 0, 0, 0.8);
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 9999;
    font-size: 1.5rem;
    padding: 2rem;
    flex-direction: column;
    gap: 1rem;
  }
`;
const MainContent = styled.div`
  display: block;

  @media (orientation: landscape) and (max-width: 900px) {
    display: none;
  }
`;
function App() {
  return (
    <div className="App">
      <LandscapeOverlay>
        <p>Tourne ton appareil en mode portrait</p>
      </LandscapeOverlay>
      <MainContent>
        <GlobalStyle />
        <BackgroundWrapper>
          <Routes>
            <Route path="/james_le_hibou" element={<JamesGame />} />
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Home />} />
            <Route path="/charly_le_cameleon" element={<CharlyGames />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/politique" element={<Politique />} />
            <Route path="/mention" element={<Mention />} />
          </Routes>
        </BackgroundWrapper>
      </MainContent>
      <ToastContainer/>
    </div>
  );
}

export default App;
