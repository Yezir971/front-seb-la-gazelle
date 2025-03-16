import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { t } from "i18next";
import Cookies from "js-cookie";
function DisconnectButton() {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    
    function deleteToken() {
        // si on click sur le button de deconnaxion on détruit le token en session 
        Cookies.remove('token')
        // si tout est ok on actualise la page  
        window.location.reload();
    }
  return (
    <button 
    onMouseEnter={() => setCursorType(pointer)}
    onMouseLeave={() => setCursorType(cursor)} 
    onMouseDown={() => setCursorType(pointer)}
    onMouseUp={() => setCursorType(cursor)} 
    onClick={deleteToken}
    className="disconnectButton">{t('seDeconnecter')}</button>
  );
}

export default DisconnectButton;