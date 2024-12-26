import { useContext } from 'react';
import {UserContext} from '../context/UserContext';

function SignUpButton() {
    const {modalState, toggleModals } = useContext(UserContext);

    return(
            <button className="gestionButton" onClick={()=> toggleModals("signUp")}>Inscris-toi</button>
    )
}

export default SignUpButton