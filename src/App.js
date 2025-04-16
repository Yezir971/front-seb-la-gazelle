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
import { createGlobalStyle } from "styled-components";
import Page404 from "./pages/Page404";
import Profil from "./pages/Profil";

const GlobalStyle=createGlobalStyle`
  *, body{
    cursor: none !important
  }
`
function App() {
  return (
    <div className="App">
      {/* <Cursor ref={cursorRef} type={cursorType}></Cursor> */}
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
        </Routes>
      </BackgroundWrapper>
    </div>
  );
}

export default App;
