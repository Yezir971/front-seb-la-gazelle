import { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";

const StarsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
`;

const Star = styled.div`
    font-size: 30px;
    opacity: 0;
    transform: scale(0);
`;

const Stars = ({ score }) => {
  const starsRef = useRef([]);

  useEffect(() => {
    starsRef.current.forEach((star, index) => {
        let threshold = (index + 1) * (20 / 3); 
        if (score >= threshold) {
        gsap.fromTo(
            star,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, delay: index * 0.3, ease: "bounce.out" }
        );
        }
    });
  }, [score]);

  return (
    <StarsContainer>
      {[...Array(3)].map((_, i) => (
        <Star key={i} ref={(el) => (starsRef.current[i] = el)}>⭐</Star>
      ))}
    </StarsContainer>
  );
};

export default Stars;
