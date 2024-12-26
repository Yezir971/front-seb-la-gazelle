<<<<<<< HEAD
import { useContext, useRef, useState } from 'react';
=======
import { useContext, useRef } from 'react';
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
import {UserContext} from '../context/UserContext';
import useFetch from '../assets/hooks/useFetch';

function SignInModal() {
    const refName = useRef()
    const refPassword = useRef()
    const {modalState, toggleModals } = useContext(UserContext);
<<<<<<< HEAD
    const [responseApi, setResponseApi] = useState("") 
    const [error, setError] = useState(false)
    
    const { send } = useFetch('https://127.0.0.1:8000/api/login_check', "POST")
    const submit = async (e) => {
        // console.time("temps exécution")
=======
    const { send, isLoading, data, error, dataError } = useFetch('https://127.0.0.1:8000/api/login_check', "POST")
    
    const submit = async (e) => {
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
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
<<<<<<< HEAD
            const response = await send(body)
            console.log(`resultat api :`)
            if(response.data.token && response){
                // on récupère le token de l'utilisateur 
                const token = response.data.token
                setResponseApi(response)
                // on save dans le localstorage le token de l'utilisateur 
                localStorage.setItem("token", token);
    
                // si tout est ok on actualise la page  
                window.location.reload();

                // si on arrive pas a se connecter c'est que le mot de passe ou le mail n'est pas correcte 

            }
            else if(response.data.code === 401){
                setResponseApi("Votre mot de passe ou mail n'est pas correcte")
                setError(true)
            }
            // console.timeEnd('temps exécution')
            
        } catch (error) {
            console.log(`erreur de l'api : ${error}`)
            // console.timeEnd('temps exécution')

        }
    }

=======
            await send(body)
            console.log(`resultat api :`)
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
    
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
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
<<<<<<< HEAD
                    {
                        error && <p>{responseApi}</p>
                    }

=======
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
                </div>
            )}
        </>
    )
}

export default SignInModal