import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { t } from "i18next";

function DisconnectButton() {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    
  return (
    <button 
    onMouseEnter={() => setCursorType(pointer)}
    onMouseLeave={() => setCursorType(cursor)} 
    onMouseDown={() => setCursorType(pointer)}
    onMouseUp={() => setCursorType(cursor)} 
    className="disconnectButton">{t('seDeconnecter')}</button>
  );
}

export default DisconnectButton;