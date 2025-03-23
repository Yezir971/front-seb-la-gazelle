// src/components/ScoreGauge.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";

const JaugeContainer = styled.div`
  width: 100%;
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
`;

const JaugeFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ffcc00, #ff6600);
  width: 0%;
`;

const ScoreJauge = ({ score }) => {
    const jaugeRef = useRef(null);
    
    useEffect(() => {
    gsap.to(jaugeRef.current, {
        width: `${score/20*100}%`,
        duration: 1.5,
        ease: "power2.out",
    });
    }, [score]);

    return (
        <JaugeContainer>
            <JaugeFill ref={jaugeRef} />
        </JaugeContainer>
    );
};

export default ScoreJauge;
