import { useContext, useRef, useState } from "react"
import { UserContext } from "../context/UserContext";
import  useFetch  from "../assets/hooks/useFetch";

function SignUpModal() {
    const [data, setData] = useState({})
    
    const refEmail = useRef()
    const refName = useRef()
    const refPassword = useRef()
    const {modalState, toggleModals } = useContext(UserContext);
    const { send, dataError } = useFetch('https://127.0.0.1:8000/api/validate-account', "POST")
    const [responseApi, setResponseApi] = useState({}) 

    const submit = async (e) => {
        e.preventDefault()
        // On défini le body de notre requete ici 
        let body = {
            "username": refName.current.value ,
            "email": refEmail.current.value ,
            "password": refPassword.current.value
        }
        // on essaye d'envoyer le body avec la fonction send du hooks useFetch 
        try {
            const response = await send(body)
            // console.log(`resultat de api :`)
            setResponseApi(response)
            // console.log(response)
            
            console.log(data)
            setData(response.data)
        } catch (error) {
            console.log(`erreur de l'api : ${error}`)
            // console.log(responseApi)
            // console.table(dataError)
            // setResponseApi(error)
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
                    {/* si il existe des violations donc des erreurs dans les data récupérer, on affiche la liste suivante sinon on affiche le message de succès  */}
                    {data && data.violations ? (
                        <>
                            <ul>
                                {data.violations.map((violation, idKey) => 
                                    <li key={idKey}>{violation.title}</li>
                                )}
                            </ul>
                        
                        </>

                    ):(
                        <>
                        <ul>
                            <li>{data.message}</li>
                        </ul>
                        
                        </>

                    )}
                </div>

            )}
        
        </>    
    )
}

export default SignUpModal