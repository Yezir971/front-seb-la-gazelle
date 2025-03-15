import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from 'react-router-dom'
import defaultUser from '../assets/img/default-user.png'
function ProfilButton() {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    const { isLoading, user } = useContext(AuthContext);
    
  return (
    <button 
    onMouseEnter={() => setCursorType(pointer)}
    onMouseLeave={() => setCursorType(cursor)} 
    onMouseDown={() => setCursorType(pointer)}
    onMouseUp={() => setCursorType(cursor)} 
    class="profilButton">
        <NavLink>
            {!isLoading && user ? 
                user.avatar == null ? <img src={defaultUser} alt="avatar" className="avatar"/> : <img src={user.avatar} alt="avatar" className="avatar"/>
            : "Profil"}
        </NavLink>
    </button>
  );
}

export default ProfilButton;