import Navbar from "./Component/Navbar";
import SignInModal from "./modal/SignUpModal";
import SignUpModal from "./modal/SignInModal";
import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import JamesGame from './pages/JamesGame'
function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <SignInModal />
      <SignUpModal /> */}
      <Routes>

        <Route path="/james_le_hibou" element={<JamesGame />} />
        <Route path="/route_du_sexy_seb_qui_est_trop_beau_wala_c_la_verite" element={<Test />} />
        <Route path="/" element={<Home />} />


      </Routes>
    </div>
  );
}

export default App;
