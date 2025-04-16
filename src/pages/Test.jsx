import { useState } from "react";
import gsap from "gsap";
// plugin pour l'animation du texte
import { TextPlugin } from "gsap/TextPlugin";
import LifeComponents from "../Component/LifeComponents";
gsap.registerPlugin(TextPlugin);

const Test = () => {
  const [nbLifeMin, setNbLifeMin] = useState(0)
  const [nbLife, setNbLife] = useState(3)
  // fonction pour retirer un coeur 
  const minHeart = () => {
    if(nbLifeMin < nbLife){
        setNbLifeMin((prev) => prev+1)
    }
  }

  return (
    <>
        

      {/* <EndGame nameGame="james le hiboux" score={score}/> */}
      <LifeComponents nbLifeMin={nbLifeMin} nbLife={nbLife} />
      <button onClick={minHeart}  >
        {nbLifeMin}
      </button>
    </>
  );
};

export default Test;
