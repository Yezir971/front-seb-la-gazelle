import { useContext, useRef, useState } from "react"
import { UserContext } from "../context/UserContext"
import { CursorContext } from "../context/CursorContext";
import useFetch from "../assets/hooks/useFetch";
import { t } from "i18next";
import styled from "styled-components";
const Errors = styled.ul`
    color:black;
    list-style: none;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap:8px;
`
const ContainerSuccess = styled.ul`
    color:white;
    list-style: none;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap:8px;
`

const ErrorsItems = styled.li`
    background: red;
    padding:16px;
    border-radius:16px;

`
const SuccessItems = styled.li`
    background: green;
    padding:16px;
    border-radius:16px;

`
const TitlePasswordPage = styled.h1`
    text-align:center;

`
const ChangePassword = () => {
    const { modalState, toggleModals } = useContext(UserContext)
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    const { send, dataError } = useFetch('https://orange-wolf-959534.hostingersite.com/change-password', "POST")
    // const refEmail = useRef()
    const [ email, setEmail ] = useState('')
    const [data, setData] = useState({})
    const [responseApi, setResponseApi] = useState({}) 


    const submit = async (e) => {
        e.preventDefault()
        // On défini le body de notre requete ici 
        let body = {
            "email": email 
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
    console.log(data.message)    
    return(
        <>
            {modalState.changePassword && (
                <div className="SignInContainer formContainer">
                    <svg 
                    onMouseEnter={() => setCursorType(pointer)}
                    onMouseLeave={() => setCursorType(cursor)} 
                    onMouseDown={() => setCursorType(pointer)}
                    onMouseUp={() => setCursorType(cursor)} 
                    className="svgForm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" onClick={closeModal}/></svg>
                    <TitlePasswordPage>{t('sendMail')}</TitlePasswordPage>
                    <form onSubmit={submit} >
                        <label htmlFor="email" className="formLabel">{t('monMail')}</label>
                        <input onChange={e => setEmail(e.target.value)} id="email" type="email" name="email" placeholder={`${t('monMail')}...`} className="formInput"/>
                        <div 
                        className="containerFormButton">
                            <input 
                                onMouseEnter={() => setCursorType(pointer)}
                                onMouseLeave={() => setCursorType(cursor)} 
                                onMouseDown={() => setCursorType(pointer)}
                                onMouseUp={() => setCursorType(cursor)} 
                            type="submit" value={t('send')} className="formButton" />
                        </div>
                    </form>
                    {/* si il existe des violations donc des erreurs dans les data récupérer, on affiche la liste suivante sinon on affiche le message de succès  */}
                    {(data.message !== undefined ) && (
                        <>
                            {data.message !== "Un e-mail vous a été envoyé." ? (
                                <>
                                    <Errors>
                                        <ErrorsItems>{t('errorMailReset')}</ErrorsItems>
                                    </Errors>
                                
                                </>
                            ):(
                                <>
                                    <Errors>
                                        <SuccessItems>{t('emailSendSuccess')}</SuccessItems>
                                    </Errors>
                                </>
                            )}
                        </>
                    )}
                </div>

            )}
        </>
    )
}

export default ChangePassword