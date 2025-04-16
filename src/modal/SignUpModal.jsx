import { useContext, useRef, useState } from "react"
import { UserContext } from "../context/UserContext";
import  useFetch  from "../assets/hooks/useFetch";
import { CursorContext } from "../context/CursorContext";
import { t } from "i18next";
import styled from "styled-components";

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

function SignUpModal() {
    const [data, setData] = useState({})
    
    const refEmail = useRef()
    const refName = useRef()
    const refPassword = useRef()
    const {modalState, toggleModals } = useContext(UserContext);
    const { send, dataError } = useFetch('https://orange-wolf-959534.hostingersite.com/api/validate-account', "POST")
    const [responseApi, setResponseApi] = useState({}) 
    const { setCursorType, pointer, cursor } = useContext(CursorContext);

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
            setResponseApi(response)
            
            setData(response.data)
        } catch (error) {
            console.log(`erreur de l'api : ${error}`)
            // setResponseApi(error)
        }
        
    }

    const closeModal = () => {
        toggleModals("close")
    }
    const translateMessageError = (message) => {
        switch (message) {
            case "Le nom de l'utilisateur doit faire au moins 1 caractère.":
                return t('errorNameUserLengthForm');
        
            case "Le nom de l'utilisateur est obligatoire.":
                return t('errorNameUserRequiredForm');
        
            case "Le mail de l'utilisateur doit faire au moins 1 caractère.":
                return t('errorEmailUserLengthForm');
        
            case "Le mail de l'utilisateur est obligatoire.":
                return t('errorEmailUserRequiredForm');
        
            case "Cette adresse email est déjà utilisée.":
                return t('errorEmailUserUsedForm');
        
            case "Le mot de passe de l'utilisateur ne peut pas être vide.":
                return t('errorPasswordUserEmptyForm');
        
            case "Le mot de passe doit contenir au moins 8 caractères, dont une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.":
                return t('errorPasswordUserSyntaxeForm');
            default:
                break;
        }
    }
    
    return(
        <>
            {modalState.signUpModal && (
                <div className="SignInContainer formContainer">
                    <svg 
                    onMouseEnter={() => setCursorType(pointer)}
                    onMouseLeave={() => setCursorType(cursor)} 
                    onMouseDown={() => setCursorType(pointer)}
                    onMouseUp={() => setCursorType(cursor)} 
                    className="svgForm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" onClick={closeModal}/></svg>
                    <form onSubmit={submit} >
                        <label htmlFor="email" className="formLabel">{t('monMail')}</label>
                        <input ref={refEmail} id="email" type="email" name="email" placeholder={`${t('monMail')}...`} className="formInput"/>

                        <label htmlFor="name" className="formLabel">{t('nom')}</label>
                        <input ref={refName} id="name" type="text" name="nickName" placeholder={`${t('nom')}...`}  className="formInput"/>

                        <label htmlFor="password" className="formLabel">{t('monMotDePasse')}</label>
                        <input ref={refPassword} id="password" type="password" name="pwd" placeholder={`${t('monMotDePasse')}...`} className="formInput"/>

                        <div 
                        onMouseEnter={() => setCursorType(pointer)}
                        onMouseLeave={() => setCursorType(cursor)} 
                        onMouseDown={() => setCursorType(pointer)}
                        onMouseUp={() => setCursorType(cursor)} 
                        className="containerFormButton">
                            <input type="submit" value={t('creerMonCompte')} className="formButton" />
                        </div>
                    </form>
                    {/* si il existe des violations donc des erreurs dans les data récupérer, on affiche la liste suivante sinon on affiche le message de succès  */}
                    {data && data.violations ? (
                        <>
                            <Errors>
                                {data.violations.map((violation, idKey) => 

                                    <ErrorsItems key={idKey}>{translateMessageError(violation.title)}</ErrorsItems>
                                )}
                            </Errors>
                        
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