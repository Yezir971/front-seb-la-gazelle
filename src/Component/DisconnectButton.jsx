import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

function DisconnectButton() {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    
  return (
    <button 
    onMouseEnter={() => setCursorType(pointer)}
    onMouseLeave={() => setCursorType(cursor)} 
    onMouseDown={() => setCursorType(pointer)}
    onMouseUp={() => setCursorType(cursor)} 
    className="disconnectButton">Se déconnecter</button>
  );
}

export default DisconnectButton;