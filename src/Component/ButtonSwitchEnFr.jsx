import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../context/LanguageContext";
import { CursorContext } from "../context/CursorContext";

const SwitchWrapper = styled.label`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 26px;
  border-radius: 20px;
  background: ${({ checked }) => (checked ? "#72da67" : "#dfd9ea")};
  transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;

const SwitchInput = styled.input`
  display: none;
`;

const SwitchToggle = styled.span`
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? "26px" : "2px")};
  width: 22px;
  height: 22px;
  background: ${({ checked }) => (checked ? "#fff" : "#fafafa")};
  border-radius: 50%;
  transition: 
    left 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  ${SwitchWrapper}:active & {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 
                0 0 0 20px rgba(128, 128, 128, 0.1);
  }
`;
const Container = styled.div`
    display:flex;
    gap:20px;
    align-items:center;

`

const ButtonSwitchEnFr = () => {
    const [checked, setChecked] = useState(true);
    const { language, change } = useContext(LanguageContext);
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    const handleMouse = (e, type) => () => setCursorType(type)

    const switchButtonFunction = () => {
        setChecked(!checked)
    }
    useEffect(() => {
        setChecked(language === "fr");
    }, [language]);
    return (
        <Container
        onMouseEnter={handleMouse(null, pointer)}
        onMouseLeave={handleMouse(null, cursor)}
        >
        <p>EN</p>
        <SwitchWrapper checked={checked} onAuxClick={() => switchButtonFunction()}>
            <SwitchInput 
                type="checkbox" 
                checked={checked} 
                onChange={() => setChecked(!checked)} 
                onClick={() => change()}
            />
            <SwitchToggle checked={checked} />
        </SwitchWrapper>
        <p>FR</p>
        </Container>
    );
};

export default ButtonSwitchEnFr;
