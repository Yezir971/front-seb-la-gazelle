import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NatureBackground from "../assets/img/Nature_Vector_Backgrounds.jpeg";
import ChameleonBackground from "../assets/img/background-charly-le-cameleon.png";
import HibouBackground from "../assets/img/background_james_hibou.png"
const PageBackground = styled.div`
  background: ${({ $background }) => $background } no-repeat center ;
  height:100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow:hidden;
`

// component qui permet de gérer le background 
const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  // Définir un background différent en fonction de la route
  const backgrounds = {
    "/": `url(${NatureBackground})`, // Page d'accueil
    "/settings": `url(${NatureBackground})`, // Page de settings
    "/charly_le_cameleon": `url(${ChameleonBackground})`,
    "/james_le_hibou": `url(${HibouBackground})`
  };
  const currentBackground = backgrounds[location.pathname] || "white";

  return <PageBackground $background={currentBackground}>{children}</PageBackground>;
  // return <PageBackground>{children}</PageBackground>;
};  

export default BackgroundWrapper; 