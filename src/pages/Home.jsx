import { useEffect, useState } from "react"
import Navbar from "../Component/Navbar"
import SignInModal from "../modal/SignInModal"
import SignUpModal from "../modal/SignUpModal"
import useFetch from "../assets/hooks/useFetch"
import JamesGameModal from "../modal/JamesGameModal"
import ShowAllAnimals from "../Component/ShowAllAnimals"
import CharlyGameModal from "../modal/CharlyGameModal"
import styled from "styled-components"
import { t } from "i18next";

const ContainerHome = styled.div`
     width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Home = () => {
    // on récupère le token dans le localStorage si il est présent sinon on créer une chaîne de caractère vide 
    const [isLocalAuth, setIsLocalAuth] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "" )
    const [auth, setAuth ] = useState()

    // requete vers l'api sebi la gazelle pour voir si le token est valide 
    const { send } = useFetch('https://127.0.0.1:8000/api/user/validate-token', "POST")



    const verificationAuth = async () => {
        if(localStorage.getItem('token')){
            let body = {
                'token' : localStorage.getItem('token')
            }
            try {
                let response = await send(body)
                setAuth(response.data.isValide)
            } catch (error) {
                console.log(error)
            }
        }
    }
    // on effectue une vérivication du token au chargement de la page 
    useEffect(() => {
        verificationAuth()
    }, [isLocalAuth])

    const deleteToken = () => {
        // si on click sur le button de deconnaxion on détruit le token en session 
        let newToken = localStorage.removeItem('token')
        setIsLocalAuth(newToken)
        // si tout est ok on actualise la page  
        window.location.reload();
    }
    return(
        <>
                {/* ternaire pour gérer le cas ou l'utilsateur est déjà connecter  */}
            {
                isLocalAuth !== "" && auth  ? (
                    <>
                        <p>Vous etes connecter ici logo avatar</p>
                        <button onClick={deleteToken}>{t('deconnecter')}</button>
                    </>
                ):(
                    <>
                        <Navbar/>
                        <SignInModal />
                        <SignUpModal />
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