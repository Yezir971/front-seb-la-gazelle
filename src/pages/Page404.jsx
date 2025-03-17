import styled from "styled-components"
import mel404 from "../assets/img/mel_la_marmotte.svg"
import { Link } from "react-router-dom"
import { CursorContext } from "../context/CursorContext"
import { useContext } from "react"
import { t } from "i18next";

const Container = styled.div`
    width:100vw;
    height:100vh;
    color:#FFFFFF;
    display:flex;
    justify-content:center;
    flex-direction:column;
    gap:30px;
`
const ContainerMessage404 = styled.div`
    margin:auto;
    disaplay:flex;
    justify-content:center;
    align-items:center;
    background:#EAB816;
    border-radius:46px;
    padding:64px 195px;
    text-align:center;
    -webkit-box-shadow: 0px 18px 23px -7px rgba(0,0,0,0.25); 
    box-shadow: 0px 18px 23px -7px rgba(0,0,0,0.25);
`
const StyledLink  = styled(Link)`
    margin:auto;
    background:#EAB816;
    border:none;
    padding:16px 32px;
    border-radius:46px;
    color:white;
    box-shadow
    -webkit-box-shadow: 0px 18px 23px -7px rgba(0,0,0,0.25); 
    box-shadow: 0px 18px 23px -7px rgba(0,0,0,0.25);
    text-decoration:none;

`
const Medium = styled.div`
    margin:auto;
    gap:0px;
    display:flex;
    flex-direction:column;
    align-items: center;

`


const Page404 = () => {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    
    return(
        <>
            <Container>
                <Medium>
                    <img src={mel404} alt="image de mel la marmotte" width={405} height={350} />
                    <ContainerMessage404>
                        <h1>{t('page404')}</h1>
                        <p>404</p>
                    </ContainerMessage404>

                </Medium>
                <StyledLink 
                    to={"/"}
                    onMouseEnter={() => setCursorType(pointer)}
                    onMouseLeave={() => setCursorType(cursor)} 
                    onMouseDown={() => setCursorType(pointer)}
                    onMouseUp={() => setCursorType(cursor)} 
                >
                    {t('accueilPage')}
                </StyledLink >

            </Container>

        </>
    )
}

export default Page404