import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from 'react-router-dom'
import defaultUser from '../assets/img/default-user.png'
import styled from "styled-components";
const ProfileButtonContainer = styled.button`
  background: #EF910F;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: none;
  display:flex;
  justify-content: center;
  align-items: center;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

  }
`

function ProfilButton() {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    const { isLoading, user } = useContext(AuthContext);
    
  return (
    <ProfileButtonContainer 
    onMouseEnter={() => setCursorType(pointer)}
    onMouseLeave={() => setCursorType(cursor)} 
    onMouseDown={() => setCursorType(pointer)}
    onMouseUp={() => setCursorType(cursor)}>
        <NavLink to={"/profil"}>
            {!isLoading && user ? 
                user.avatar == null ? <img src={defaultUser} alt="avatar" className="avatar"/> : <img src={`https://orange-wolf-959534.hostingersite.com/${user.avatar.src}`} alt="avatar" className="avatar"/>
            : ""}
        </NavLink>
    </ProfileButtonContainer>
  );
}

export default ProfilButton;