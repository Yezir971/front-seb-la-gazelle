import { useContext } from 'react';
import {UserContext} from '../context/UserContext';
import { CursorContext } from '../context/CursorContext';

function SignInButton() {
    const {modalState, toggleModals } = useContext(UserContext);
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    

    return(
        <button 
        onMouseEnter={() => setCursorType(pointer)}
        onMouseLeave={() => setCursorType(cursor)} 
        onMouseDown={() => setCursorType(pointer)}
        onMouseUp={() => setCursorType(cursor)} 
        className="gestionButton"
        onClick={()=> toggleModals("signIn")}>Connecte-toi</button>
    )
}

export default SignInButton