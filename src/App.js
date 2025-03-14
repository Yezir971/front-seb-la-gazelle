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

const GlobalStyle=createGlobalStyle`
  *, body{
    cursor: none !important
  }
`
// const Cursor = styled.div`
//   background-image: url(${(props) => props.type});
//   width: 32px;
//   height: 32px;
//   background-size: cover;
//   position: fixed;
//   top: 0;
//   left: 0;
//   pointer-events: none;
//   transform: translate(-50%, -50%);
//   z-index: 9999;
// `
function App() {
  // const cursorRef = useRef(null);
  // const [cursorType, setCursorType] = useState(cursor);

  // useEffect(() => {
  //   const mouseMove = e => {
  //     gsap.to(cursorRef.current, {
  //       x:e.clientX,
  //       y:e.clientY,
  //       duration:0.2,
  //       ease:"power2.out"
  //     })
  //   }

  //   const handleMouseEnter = () => setCursorType(pointer);
  //   const handleMouseLeave = () => setCursorType(cursor);

  //   window.addEventListener("mousemove", mouseMove);
  //   document.querySelectorAll("button, a, gestionButton, boutonPlayGame").forEach((el) => {
  //     el.addEventListener("mouseover", handleMouseEnter);
  //     el.addEventListener("mouseout", handleMouseLeave);
  //     el.addEventListener("mousedown", handleMouseEnter);
  //     el.addEventListener("mouseup", handleMouseLeave);
  //   });
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //     document.querySelectorAll("button, a, gestionButton, boutonPlayGame").forEach((el) => {
  //       el.removeEventListener("mouseover", handleMouseEnter);
  //       el.removeEventListener("mouseout", handleMouseLeave);
  //       el.removeEventListener("mousedown", handleMouseEnter);
  //       el.removeEventListener("mouseup", handleMouseLeave);
  //     });
  //   }

  // }, [])

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
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BackgroundWrapper>
    </div>
  );
}

export default App;
