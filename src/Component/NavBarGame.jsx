import styled from "styled-components"
import  iconSebi  from "../assets/img/sebi_logo.png"
import  arrowReturn  from "../assets/img/Vector-return.svg"
import { NavLink } from "react-router-dom"
const Navbar = styled.nav`
    display:flex;
    justify-content:space-between;
    margin:10px 21px;
    align-items:center;
`
const ContainerIconReturn = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const ImageSebi = styled.img`
    width:102px;
    height:120px;
`
const Arrow = styled.img`
    width:44px;
    height:44px;
`
const ContainerScorePoints = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background:#EAB816;
    width: 137px;
    height: 63px;
    border-radius: 30px;
`
const TextScore = styled.p`
    font-weight:bold;
    color:white;
`


const NavBarGame = ({points}) => {
    return(
        <>
            <Navbar>
                <ContainerIconReturn>
                    <NavLink to={"/"}> 
                        <ImageSebi draggable="false" src={iconSebi} alt="icon de sebi la gazelle" />
                    </NavLink>
                    <NavLink to={"/"}>
                        <Arrow draggable="false" src={arrowReturn} alt="flèche retour" />
                    </NavLink>
                </ContainerIconReturn>
                <ContainerScorePoints>
                    <TextScore>SCORE {points} pt</TextScore>
                </ContainerScorePoints>
            </Navbar>
        
        </>
    )
}

export default NavBarGame