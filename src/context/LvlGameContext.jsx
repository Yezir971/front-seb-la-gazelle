import { createContext, useState } from "react";

export const LvlGameContext = createContext();

const LvlGameProvider = ({children}) => {
    const [nbLife, setNbLife] = useState(5);

    return (
        <LvlGameContext.Provider value={{nbLife, setNbLife}}>
            {children}
        </LvlGameContext.Provider>
    )
}

export default LvlGameProvider;