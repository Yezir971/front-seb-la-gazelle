import heartOpen from "../assets/img/vie/coeur-eyes-open.png"
import heartClose from "../assets/img/vie/coeur-eyes-close.png"
import heartDead from "../assets/img/vie/coeur-dead.png"
import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";

const breakpoints = {
    mobile: '600px',
    tablet: '900px',
}

const HeartFrame = styled.div`
    background: white;
    border: 4px solid #EF910F;
    border-radius: 2rem;
    padding: 1rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 300px;


    @media (max-width: ${breakpoints.mobile}) {
        // max-width: 100px;
        flex-direction:row;
        width:200px;
        padding: 10px;

    }

    @media (max-width: ${breakpoints.tablet}) {
        // max-width: 100px;
        flex-direction:row;
        gap:1rem;


    }

`
const ImageHearth = styled.img`
    @media (max-width: ${breakpoints.tablet}) {
        width:2rem;
    }
`
const LifeComponents = ({nbLifeMin, nbLife}) => {
    const [hearthType, setHearthType] = useState(heartOpen)
    const hearthRef = useRef([])
    useEffect(() => {
        startEyesHeart()
    }, [])

    // Animation des coeurs
    const startEyesHeart = () => {    
        hearthRef.current = gsap.timeline({ repeat: -1, yoyo: true });
        console.log(hearthRef.current);
        
        hearthRef.current.to(hearthRef.current, {
            duration: 0.9,
            yoyo: true,
            repeat: -1,
            onRepeat: () => {
                setHearthType((prev) => prev === heartOpen ? heartClose : heartOpen );
            },
        });
    };

    return(
        <>
            <HeartFrame>
                {[...Array(nbLife-nbLifeMin)].map((_, key) => (
                    <ImageHearth key={key} ref={(element) => (hearthRef.current[key] = element)} draggable="false" src={hearthType} alt="" />
                ))}
                {[...Array(nbLifeMin)].map((_, key) => (
                    <ImageHearth key={key} draggable="false" src={heartDead} alt="" />
                ))}
            </HeartFrame>
        </>
    )
}
export default LifeComponents