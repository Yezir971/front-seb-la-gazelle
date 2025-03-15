import gsap from "gsap";
// plugin pour l'animation du texte
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import styled from "styled-components";
gsap.registerPlugin(TextPlugin);

const Container = styled.div`
    position: relative;
    background: white;
    padding: 15px 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    max-width: 250px;
    &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        right: 20px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid white;
    }
`

const Bubble = () => {
    const textBubbleRef = useRef(null)
    useEffect(() => {
        //replaces yourElement's text with "This is the new text" 
        gsap.to(textBubbleRef.current, {
            duration: 2,
            text: "Aide-moi à trouver mes amis",
            ease: "none",
        });
    }, [])
    return(
        <>
            <Container ref={textBubbleRef}>
            </Container>
        </>
    )
}
export default Bubble
