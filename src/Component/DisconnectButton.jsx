import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { t } from "i18next";
import Cookies from "js-cookie";
import styled from "styled-components";


const DeconnectButton = styled.button`
  background: #EF910F;
  color: white;
  width: auto;
  border-radius: 32px;
  border: none;
  height: 60px;
  padding-inline: 20px;
  font-size: 32px;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 1rem;
    width:auto ;
  }
`
function DisconnectButton() {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    
    function deleteToken() {
        // si on click sur le button de deconnaxion on détruit le token en session 
        Cookies.remove('token')
        // si tout est ok on actualise la page  
        window.location.reload();
    }
  return (
    <DeconnectButton
    onMouseEnter={() => setCursorType(pointer)}
    onMouseLeave={() => setCursorType(cursor)} 
    onMouseDown={() => setCursorType(pointer)}
    onMouseUp={() => setCursorType(cursor)} 
    onClick={deleteToken}>{t('seDeconnecter')}</DeconnectButton>
  );
}

export default DisconnectButton;