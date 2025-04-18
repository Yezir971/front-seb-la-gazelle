import React from "react";
import styled from "styled-components";
import ProfilButton from "../ProfilButton";
import DisconnectButton from "../DisconnectButton";
import SignInButton from "../SignInButton";
import SignUpButton from "../SignUpButton";
import { Link } from "react-router-dom";
import SettingButton from "../SettingButton";

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #effffa;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    height: 100vh;
    width: 100vw; 
    overflow-x: hidden;
    text-align: left;
    padding: 2rem;
    position: fixed;
    gap:1rem;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index:3;

    
    @media (max-width: 576px) {
        width: 100%;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #0d0c1d;
        text-decoration: none;
        transition: color 0.3s linear;

    }
    @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
    }

    &:hover {
        color: #343078;
    }
`;
const ContainerLink = styled.div`
    position:absolute;
    top:2rem;
    left:2rem;

`
const ConatinerButtonProfil = styled.div`
    @media (max-width: 768px) {
        display:flex;
        gap:1rem;
    }

`

const Menu = ({ open, connect }) => {
  return (

    <StyledMenu open={open}>
        {connect ?(
            <ConatinerButtonProfil>
                <ProfilButton />
                <DisconnectButton />
            </ConatinerButtonProfil>
        ):(
            <>
                <SignInButton />
                <SignUpButton />
            </>
        )}
        <ContainerLink>
            <Link to={"/settings"}>
                <SettingButton  />
            </Link>
        </ContainerLink>
    </StyledMenu>
  );
};

export default Menu;
