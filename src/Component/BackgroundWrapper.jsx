import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NatureBackground from "../assets/img/Nature_Vector_Backgrounds.jpeg";
import ChameleonBackground from "../assets/img/background-charly-le-cameleon.png";
import HibouBackground from "../assets/img/background_james_hibou.png";
const PageBackground = styled.div`
  background-image: ${({ $background }) => $background } ;
  height:100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat:no-repeat;
  overflow:hidden;
`


// component qui permet de gérer le background 
const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  // Définir un background différent en fonction de la route
  const backgrounds = {
    "/": `url(${NatureBackground})`, // Page d'accueil
    "/settings": `url(${NatureBackground})`, // Page de settings
    "/charly_le_cameleon": `url(${ChameleonBackground})`, // page jeux charly le caméléon
    "/james_le_hibou": `url(${HibouBackground})`, // page jeux james le hiboux
  };
  // Si l'url est reconnu on applique les background de notre objet background sinon c'est que la route n'existe pas et que l'on est sur la page 404
  const currentBackground = backgrounds[location.pathname] || `url(${NatureBackground})`; 

  

  return (
    <PageBackground $background={currentBackground}>
      {children}
    </PageBackground>)
  // return <PageBackground>{children}</PageBackground>;
};  

export default BackgroundWrapper; 