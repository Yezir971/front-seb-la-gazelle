import SignUpButton from "./SignUpButton"
import SignInButton from "./SignInButton"
import SettingButton from "./SettingButton"
import {UserContext} from '../context/UserContext';
import { useContext } from "react";

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
                    <SettingButton />
                </div>
            )}
        </>
       
    )
}

export default Navbar