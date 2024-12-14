"use client"
import { useContext, useRef } from "react"
import { UserContext } from "../context/UserContext";
import  useFetch  from "../assets/hooks/useFetch";

function SignUpModal() {
    
    const refEmail = useRef()
    const refName = useRef()
    const refPassword = useRef()
    const {modalState, toggleModals } = useContext(UserContext);
    const { send, isLoading, data, error, dataError } = useFetch('https://127.0.0.1:8000/api/signup', "POST")






    // const fetchUser = async () => {
    //     try {
    //         const response = await fetch('https://127.0.0.1:8000/api/signup', {
    //             method:"POST", 
    //             headers:{
    //                 "Content-Type":"application/json",
    //             },
    //             body:  JSON.stringify({
    //                 // "username": "james" ,
    //                 // "email": "james@yahoo.com" ,
    //                 // "password": "Ketchup971@"
    //                 "username": refName.current.value ,
    //                 "email": refEmail.current.value ,
    //                 "password": refPassword.current.value
    //             }),
    //         })
    //         if (!response.ok) {
    //             throw new Error("La réponse n'est pas OK");
    //         }
    //         const data = await response.json();
    //         setDatas(data)
    //         console.log(datas)
    //     } catch (error) {
    //         console.log(`Error lors de la récupérations des données : ${error}`);
    //         console.log(datas)
    //         console.log(refPassword.current.value)
    //     }
    // }

    const submit = async (e) => {
        e.preventDefault()
        // On défini le body de notre requete ici 
        let body = {
            "username": refName.current.value ,
            "email": refEmail.current.value ,
            "password": refPassword.current.value
            // "username": "james" ,
            // "email": "james@yahoo.com" ,
            // "password": "Ketchup971@"
        }
        // on essaye d'envoyer le body avec la fonction send du hooks useFetch 
        try {
            await send(body)
            console.log(`resultat de api :`)
            // data : représente les data recu de l'api donné erreurs 
            // loading : représente le chargement de l'api 
            // error : représente le boolean des erreurs liée au serveur de l'api. (si true c'est a cause d'une erreur 500)
            // dataError : est le descriptif des errurs en cas d'erreur 500
            console.log(`
                data : ${data} // 
                loading : ${isLoading} //
                error : ${error} //
                dataError : ${dataError}`)
            console.log(JSON.stringify(data))
            
        } catch (error) {
            console.log(`erreur de l'api : ${error}`)
            console.table(dataError)

        }
        





    }


    const closeModal = () => {
        toggleModals("close")
    }
    
    return(
        <>
            {modalState.signUpModal && (
                <div className="SignInContainer formContainer">
                    <svg className="svgForm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" onClick={closeModal}/></svg>
                    <form onSubmit={submit} >
                        <label htmlFor="email" className="formLabel">Mon Email</label>
                        <input ref={refEmail} id="email" type="email" name="email" placeholder="Email..." className="formInput"/>

                        <label htmlFor="name" className="formLabel">Mon Pseudo</label>
                        <input ref={refName} id="name" type="text" name="nickName" placeholder="Nom..."  className="formInput"/>

                        <label htmlFor="password" className="formLabel">Mon Mot de passe</label>
                        <input ref={refPassword} id="password" type="password" name="pwd" placeholder="Mot de passe..." className="formInput"/>

                        <div className="containerFormButton">
                            <input type="submit" value="Créer mon compte" className="formButton" />
                        </div>
                    </form>
                </div>

            )}
        
        </>    
    )
}

export default SignUpModal