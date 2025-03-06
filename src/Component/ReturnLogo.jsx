import { NavLink } from "react-router-dom"
import  iconSebi  from "../assets/img/sebi_logo.png"
import  arrowReturn  from "../assets/img/Vector-return.svg"
import styled from "styled-components"
const ContainerIconReturn = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    display:flex;
    justify-content: start;
    margin:16px 0 0 16px;
`
const ImageSebi = styled.img`
    width:72px;
    height:90px;
`
const Arrow = styled.img`
    width:30px;
    height:30px;
`

const ReturLogo = () => {
    return(
        <>
            <Container>
                <ContainerIconReturn>
                    <NavLink to={"/"}> 
                        <ImageSebi draggable="false" src={iconSebi} alt="icon de sebi la gazelle" />
                    </NavLink>
                    <NavLink to={"/"}>
                        <Arrow draggable="false" src={arrowReturn} alt="flèche retour" />
                    </NavLink>
                </ContainerIconReturn>
            </Container>
        </>
    )
}

export default ReturLogo