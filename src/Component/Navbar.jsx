import SignUpButton from "./SignUpButton"
import SignInButton from "./SignInButton"
import SettingButton from "./SettingButton"
import ProfilButton from "./ProfilButton"
import DisconnectButton from "./DisconnectButton"
import {UserContext} from '../context/UserContext';
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";
import Cookies from "js-cookie";
import styled from "styled-components"
import Burger from "./burger-menu/Burger"
import Menu from "./burger-menu/Menu"
const NavBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px;
    @media screen and (max-width: 768px) {
        display: none;

    }
`
const ButtonNavBar = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
`
const ContainerBurgerMenu = styled.div`


`

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) return;
        handler(event);
      };
      document.addEventListener("mousedown", listener);
  
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
};


function Navbar() {
    const {modalState } = useContext(UserContext);
    const connect = Cookies.get('token')

    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    
    return(
        <>
            {modalState.showNavbar && ( 
                <> 
                    <NavBar>
                        <ButtonNavBar>
                            {connect ?(
                                <>
                                    <ProfilButton />
                                    <DisconnectButton />
                                </>
                            ):(
                                <>
                                    <SignInButton />
                                    <SignUpButton />
                                </>
                            )}
                        </ButtonNavBar>
                        <Link to={"/settings"}>
                            <SettingButton  />
                        </Link>
                    </NavBar>
                    <ContainerBurgerMenu ref={node}>
                        <Burger open={open} setOpen={setOpen} />
                        <Menu open={open} setOpen={setOpen} connect={connect} />
                    </ContainerBurgerMenu>
                </>
            )}
        </>
       
    )
}

export default Navbar