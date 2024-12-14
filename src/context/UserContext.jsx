import { createContext, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [modalState, setModalState] = useState({
        signInModal: false,
        signUpModal: false,
        showNavbar: true
    })


    const toggleModals = modal => {
        switch (modal) {
            case "signIn":
                setModalState({
                    signUpModal: false,
                    signInModal: true,
                    showNavbar: false
                })
                break;
            case "signUp":
                setModalState({
                    signUpModal: true,
                    signInModal: false,
                    showNavbar: false
                })
                break;
            case "close":
                setModalState({
                    signUpModal: false,
                    signInModal: false,
                    showNavbar: true
                })
                break;
        }



        // if(modal === "signIn") {
        //     setModalState({
        //         signUpModal: false,
        //         signInModal: true
        //     })
        // }
        // if(modal === "signUp") {
        //     setModalState({
        //         signUpModal: true,
        //         signInModal: false
        //     })
        // }
        // if(modal === "close") {
        //     setModalState({
        //         signUpModal: false,
        //         signInModal: false
        //     })
        // }
    }
    
    return(
        <UserContext.Provider value={{modalState, toggleModals}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider