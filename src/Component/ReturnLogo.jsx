import { NavLink } from "react-router-dom"
import  iconSebi  from "../assets/img/sebi_logo.webp"
import  arrowReturn  from "../assets/img/picto/Vector-return.svg"
import styled from "styled-components"
import { useContext } from "react"
import { CursorContext } from "../context/CursorContext"
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
    const { setCursorType, pointer, cursor } = useContext(CursorContext);
    return(
        <>
            <Container>
                <ContainerIconReturn>
                    <NavLink 
                        onMouseEnter={() => setCursorType(pointer)}
                        onMouseLeave={() => setCursorType(cursor)} 
                        onMouseDown={() => setCursorType(pointer)}
                        onMouseUp={() => setCursorType(cursor)} 
                        className="cursorPointer" to={"/"}> 
                        <ImageSebi draggable="false" src={iconSebi} alt="icon de sebi la gazelle" />
                    </NavLink>
                    <NavLink 
                        onMouseEnter={() => setCursorType(pointer)}
                        onMouseLeave={() => setCursorType(cursor)} 
                        onMouseDown={() => setCursorType(pointer)}
                        onMouseUp={() => setCursorType(cursor)} 
                        to={"/"}>
                        <Arrow draggable="false" src={arrowReturn} alt="flèche retour" />
                    </NavLink>
                </ContainerIconReturn>
            </Container>
        </>
    )
}

export default ReturLogo