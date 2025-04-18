import { useContext, useRef, useState } from 'react';
import {UserContext} from '../context/UserContext';
import useFetch from '../assets/hooks/useFetch';
import { CursorContext } from '../context/CursorContext';
import Cookies from 'js-cookie';
import { t } from "i18next";
import styled from 'styled-components';
const Errors = styled.ul`
    color:black;
    list-style: none;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap:8px;
`

const ErrorsItems = styled.li`
    background: red;
    padding:16px;
    border-radius:16px;

`
const ForgotMdpButton = styled.button`
    border:none;
    font-size:1rem;
    background:none;
    text-decoration:underline;

`
function SignInModal() {
    const refName = useRef()
    const refPassword = useRef()
    const {modalState, toggleModals } = useContext(UserContext);
    const { setCursorType, pointer, cursor } = useContext(CursorContext);

    const [responseApi, setResponseApi] = useState("") 
    const [error, setError] = useState(false)



    const { send } = useFetch('https://orange-wolf-959534.hostingersite.com/api/login_check', "POST")
    const submit = async (e) => {
        // console.time("temps exécution")
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
            const response = await send(body)
            if(response.data.token && response){
                // on récupère le token de l'utilisateur 
                const token = response.data.token
                setResponseApi(response)
                // on save dans les cookies le token de l'utilisateur 
                Cookies.set('token', token, { expires: 1, secure: true });
    
                // si tout est ok on actualise la page  
                window.location.reload();

                // si on arrive pas a se connecter c'est que le mot de passe ou le mail n'est pas correcte 

            }
            else if(response.data.code === 401){
                setResponseApi(t("mdpIncorrect"))
                setError(true)
            }
            // console.timeEnd('temps exécution')
            
        } catch (error) {
            console.log(`erreur de l'api : ${error}`)
            // console.timeEnd('temps exécution')

        }
    }

    const closeModal = () => {
        toggleModals("close")
    }
    return(
        <> 
            {modalState.signInModal && (
                <div className="SignUpContainer formContainer">
                    <svg 
                    onMouseEnter={() => setCursorType(pointer)}
                    onMouseLeave={() => setCursorType(cursor)} 
                    onMouseDown={() => setCursorType(pointer)}
                    onMouseUp={() => setCursorType(cursor)} 
                    className="svgForm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" onClick={closeModal}/></svg>
                    <form onSubmit={submit}>
                        <label htmlFor="" className="formLabel">{t('monMail')}</label>
                        <input type="text" ref={refName} name="emailNickname" placeholder={`${t('monMail')}...`} className="formInput"/>

                        <label htmlFor="" className="formLabel">{t('monMotDePasse')}</label>
                        <input type="password" ref={refPassword} name="pwd" placeholder={`${t('monMotDePasse')}...`} className="formInput"/>

                        {/* <a href="#" className="forgotPassword">Mot de passe oublié ?</a> */}
                        <div 

                        className="containerFormButton">
                            <ForgotMdpButton
                                onMouseEnter={() => setCursorType(pointer)}
                                onMouseLeave={() => setCursorType(cursor)} 
                                onMouseDown={() => setCursorType(pointer)}
                                onMouseUp={() => setCursorType(cursor)} 
                                onClick={()=> toggleModals("changePassword")}
                            >{t('resetPassword')}</ForgotMdpButton>
                            <input 
                                onMouseEnter={() => setCursorType(pointer)}
                                onMouseLeave={() => setCursorType(cursor)} 
                                onMouseDown={() => setCursorType(pointer)}
                                onMouseUp={() => setCursorType(cursor)} 
                            type="submit" value={t('seConnecter')} className="formButton"/>
                        </div>
                    </form>
                    {
                        error && (
                            <Errors>
                                <ErrorsItems>{responseApi}</ErrorsItems>
                            </Errors>
                    )
                    }

                </div>
            )}
        </>
    )
}

export default SignInModal