import SignUpButton from "./SignUpButton"
import SignInButton from "./SignInButton"
import SettingButton from "./SettingButton"
import {UserContext} from '../context/UserContext';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";

function Navbar() {
    const {modalState } = useContext(UserContext);

    
    return(
        <>
            {modalState.showNavbar && (  
                <div className="navBar">
                    <div className="buttonNavBar">
                        <SignInButton />
                        <SignUpButton />
                    </div>
                    <Link to={"/settings"}>
                        <SettingButton  />
                    </Link>
                </div>
            )}
        </>
       
    )
}

export default Navbar