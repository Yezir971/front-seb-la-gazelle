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
import styled from "styled-components";
import cursor from "./cursor.png";
import { useEffect, useState } from "react";

const Cursor = styled.div`
  background-image: url(${cursor});
  width: 32px;
  height: 32px;
  background-size: cover;
  position: absolute;
  transform: translate(-50%, -50%); 
  // pointer-events: none;
  cursor:none;
  // z-index: 9999;
`
function App() {
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  })
  console.log(mousePosition)
  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }

  }, [])
  return (
    <div className="App">
      <Cursor mousePosition={mousePosition}  style={{ top: mousePosition.y, left: mousePosition.x }}></Cursor>
      <BackgroundWrapper>
        <Routes>
          <Route path="/james_le_hibou" element={<JamesGame />} />
          <Route path="/route_du_sexy_seb_qui_est_trop_beau_wala_c_la_verite" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="/charly_le_cameleon" element={<CharlyGames />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BackgroundWrapper>
    </div>
  );
}

export default App;
