import Navbar from "./Component/Navbar";
import SignInModal from "./modal/SignUpModal";
import SignUpModal from "./modal/SignInModal";
import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import JamesGame from './pages/JamesGame'
import CharlyGames from "./pages/CharlyGame";
import BackgroundWrapper from "./Component/BackgroundWrapper";
function App() {
  return (
    <div className="App">
        <BackgroundWrapper>
          <Routes>
            <Route path="/james_le_hibou" element={<JamesGame />} />
            <Route path="/route_du_sexy_seb_qui_est_trop_beau_wala_c_la_verite" element={<Test />} />
            <Route path="/" element={<Home />} />
            <Route path="/charly_le_cameleon" element={<CharlyGames />} />
          </Routes>
        </BackgroundWrapper>
    </div>
  );
}

export default App;
