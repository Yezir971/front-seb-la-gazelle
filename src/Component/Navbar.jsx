import SignUpButton from "./SignUpButton"
import SignInButton from "./SignInButton"
import SettingButton from "./SettingButton"
import ProfilButton from "./ProfilButton"
import DisconnectButton from "./DisconnectButton"
import {UserContext} from '../context/UserContext';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";
import Cookies from "js-cookie";
function Navbar() {
    const {modalState } = useContext(UserContext);
    const connect = Cookies.get('token')
    
    return(
        <>
            {modalState.showNavbar && (  
                <div className="navBar">
                    <div className="buttonNavBar">
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