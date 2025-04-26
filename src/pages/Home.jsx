import { useEffect, useState } from "react"
import Navbar from "../Component/Navbar"
import SignInModal from "../modal/SignInModal"
import SignUpModal from "../modal/SignUpModal"
import JamesGameModal from "../modal/JamesGameModal"
import ShowAllAnimals from "../Component/ShowAllAnimals"
import CharlyGameModal from "../modal/CharlyGameModal"
import styled from "styled-components"
import { t } from "i18next";
import Cookies from "js-cookie"
import ChangePassword from "../modal/ChangePassword"
const ContainerHome = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContainerSessionExpired = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContainerMessageExpired = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 2rem;
        margin-bottom: 20px;
    }
    button{
        width: 200px;
        height: 50px;
        background-color: #EF910F;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
    }
`

const Home = () => {
    // on récupère le token dans le localStorage si il est présent sinon on créer une chaîne de caractère vide 
    const [isLocalAuth, setIsLocalAuth] = useState(Cookies.get('token') ? Cookies.get('token') : "" )
    const [auth, setAuth ] = useState()
    
    
    const verificationAuth = async () => {
        if(Cookies.get('token')){
            const token = Cookies.get('token')
            console.log(token);            
            try {
                const response = await fetch(`https://orange-wolf-959534.hostingersite.com/api/user/validate-token`, {
                    method: 'POST',
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({
                        token: token
                    })
                });
                const data = await response.json();
                setAuth(data.isValide);
                console.log(data.isValide);
            } catch (error) {
                console.log(error)
            }
        }
    }
    // on effectue une vérivication du token au chargement de la page 
    useEffect(() => {
        verificationAuth()
    }, [])

    const deleteToken = () => {
        // si on click sur le button de deconnaxion on détruit le token en session 
        let newToken = Cookies.remove('token')
        setIsLocalAuth(newToken)
        // si tout est ok on actualise la page  
        window.location.reload();
    }
    return(
        <>
                {/* ternaire pour gérer le cas ou l'utilsateur est déjà connecter  */}
            {
                isLocalAuth !== "" && !auth  ? (
                    <ContainerSessionExpired>
                        <ContainerMessageExpired>
                            <h1>{t('sessionExpiree')}</h1>
                            <button onClick={deleteToken}>{t('revenirAccueil')}</button>
                        </ContainerMessageExpired>
                    </ContainerSessionExpired>
                ):(
                    <>
                        <Navbar/>
                        <SignInModal />
                        <SignUpModal />
                        <ChangePassword />
                        <ContainerHome>
                            <ShowAllAnimals />
                            <JamesGameModal />
                            <CharlyGameModal />
                        </ContainerHome>
                    
                    </>
                )

            }

        </>
    )
}

export default Home