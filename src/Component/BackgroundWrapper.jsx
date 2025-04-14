import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NatureBackground from "../assets/img/Nature_Vector_Backgrounds.png";
import ChameleonBackground from "../assets/img/background-charly-le-cameleon.png";
import HibouBackground from "../assets/img/background_james_hibou.png";
const PageBackground = styled.div`
  background-image: ${({ $background }) => $background } ;
  height:100vh;
  overflow:hidden;
  background-position: center; /* Centre l'image */
  background-repeat: no-repeat; /* Empêche la répétition de l'image */
  background-attachment: fixed; /* Fixe l'image en arrière-plan */
  background-size: cover;
`


// component qui permet de gérer le background 
const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  // Définir un background différent en fonction de la route
  const backgrounds = {
    "/": `url(${NatureBackground})`, // Page d'accueil
    "/settings": `url(${NatureBackground})`, // Page de settings
    "/charly_le_cameleon": `url(${ChameleonBackground})`,
    "/james_le_hibou": `url(${HibouBackground})`,
    "/profil": `url(${NatureBackground})`
  };
  // Si l'url est reconnu on applique les background de notre objet background sinon c'est que la route n'existe pas et que l'on est sur la page 404
  const currentBackground = backgrounds[location.pathname] || `url(${NatureBackground})`; 

  

  return(
    <PageBackground $background={currentBackground}>
      {children}
    </PageBackground>
  )
  // return <PageBackground>{children}</PageBackground>;
};  

export default BackgroundWrapper; 