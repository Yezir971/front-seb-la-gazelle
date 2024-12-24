import { useContext, useRef } from 'react';
import {UserContext} from '../context/UserContext';
import useFetch from '../assets/hooks/useFetch';

function SignInModal() {
    const refName = useRef()
    const refPassword = useRef()
    const {modalState, toggleModals } = useContext(UserContext);
    const { send, isLoading, data, error, dataError } = useFetch('https://127.0.0.1:8000/api/login_check', "POST")
    
    const submit = async (e) => {
        e.preventDefault()
        // On défini le body de notre requete ici 
        let body = {
            "email": refName.current.value ,
            "password": refPassword.current.value
            // "username": "james" ,
            // "email": "james@yahoo.com" ,
            // "password": "Ketchup971@"
        }
        // on essaye d'envoyer le body avec la fonction send du hooks useFetch 
        try {
            await send(body)
            console.log(`resultat api :`)

            // console.log(`
            //     data : ${data} // 
            //     loading : ${isLoading} //
            //     error : ${error} //
            //     dataError : ${dataError}`)
            // console.log(JSON.stringify(data))
            
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
            {modalState.signInModal && (
                <div className="SignUpContainer formContainer">
                    <svg className="svgForm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" onClick={closeModal}/></svg>
                    <form onSubmit={submit}>
                        <label htmlFor="" className="formLabel">Mon mail</label>
                        <input type="text" ref={refName} name="emailNickname" placeholder="Mon mail..." className="formInput"/>

                        <label htmlFor="" className="formLabel">Mon Mot de passe</label>
                        <input type="password" ref={refPassword} name="pwd" placeholder="Mot de passe..." className="formInput"/>

                        {/* <a href="#" className="forgotPassword">Mot de passe oublié ?</a> */}
                        <div className="containerFormButton">
                            <input type="submit" value="Se connecter" className="formButton"/>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default SignInModal