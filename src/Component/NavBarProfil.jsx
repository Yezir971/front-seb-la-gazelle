import styled from "styled-components"
import  iconSebi  from "../assets/img/sebi_logo.png"
import  arrowReturn  from "../assets/img/Vector-return.svg"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CursorContext } from "../context/CursorContext"
const Navbar = styled.nav`
    display:flex;
    justify-content:space-between;
    padding:10px 21px;
    align-items:center;
`
const ContainerIconReturn = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const ImageSebi = styled.img`
    width:72px;
    height:90px;
`
const Arrow = styled.img`
    width:30px;
    height:30px;
`


const NavBarProfil = () => {
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
            </Navbar>
        
        </>
    )
}

export default NavBarProfil