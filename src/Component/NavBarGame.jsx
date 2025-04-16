import styled from "styled-components"
import  iconSebi  from "../assets/img/sebi_logo.png"
import  arrowReturn  from "../assets/img/Vector-return.svg"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CursorContext } from "../context/CursorContext"
import LifeComponents from "./LifeComponents"
const Navbar = styled.nav`
    display:grid;
    grid-template-columns: 268px 268px 268px;
    // display:flex;
    justify-content:space-between;
    align-items:center;
    margin:10px 21px;
`
const ContainerIconReturn = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-self: start;
`
const ImageSebi = styled.img`
    width:72px;
    height:90px;
`
const Arrow = styled.img`
    width:30px;
    height:30px;
`
const ContainerScorePoints = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background:#EAB816;
    width: 137px;
    height: 63px;
    border-radius: 30px;
    justify-self: center;
`
const TextScore = styled.p`
    font-weight:bold;
    color:white;
`


const NavBarGame = ({points, nbLife, nbLifeMin}) => {
    const { setCursorType, pointer, cursor } = useContext(CursorContext);

    return(
        <>
            <Navbar>
                <ContainerIconReturn>
                    <NavLink to={"/"}> 
                        <ImageSebi 
                        onMouseEnter={() => setCursorType(pointer)}
                        onMouseLeave={() => setCursorType(cursor)} 
                        onMouseDown={() => setCursorType(pointer)}
                        onMouseUp={() => setCursorType(cursor)} 
                        draggable="false" src={iconSebi} alt="icon de sebi la gazelle" />
                    </NavLink>
                    <NavLink to={"/"}>
                        <Arrow 
                        onMouseEnter={() => setCursorType(pointer)}
                        onMouseLeave={() => setCursorType(cursor)} 
                        onMouseDown={() => setCursorType(pointer)}
                        onMouseUp={() => setCursorType(cursor)} 
                        draggable="false" src={arrowReturn} alt="flèche retour" />
                    </NavLink>
                </ContainerIconReturn>
                <ContainerScorePoints>
                    <TextScore>SCORE {points} pt</TextScore>
                </ContainerScorePoints>
                <LifeComponents nbLifeMin={nbLifeMin} nbLife={nbLife} />
            </Navbar>
        
        </>
    )
}

export default NavBarGame