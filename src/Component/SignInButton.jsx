import { useContext } from 'react';
import {UserContext} from '../context/UserContext';

function SignInButton() {
    const {modalState, toggleModals } = useContext(UserContext);

    return(
        <button className="gestionButton" onClick={()=> toggleModals("signIn")}>Connecte-toi</button>
    )
}

export default SignInButton