import styled from "styled-components"
import iconSebi from "../assets/img/sebi_logo.png"
import arrowReturn from "../assets/img/Vector-return.svg"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CursorContext } from "../context/CursorContext"
import LifeComponents from "./LifeComponents"

const breakpoints = {
  mobile: '600px',
  tablet: '900px',
}

const Navbar = styled.nav`
  display: flex;
//   flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 16px;
  gap: 12px;

  @media (min-width: ${breakpoints.mobile}) {
    // flex-direction: row;
    align-items: center;
    margin: 12px 24px;
    gap: 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    margin: 16px 32px;
  }
`

const ContainerIconReturn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  justify-content: center;
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    justify-content: flex-start;
    width: auto;
  }
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: flex-start;
    width: auto;
  }
`

const ImageSebi = styled.img`
  width: 48px;
  height: 60px;

  @media (min-width: ${breakpoints.mobile}) {
    width: 60px;
    height: 75px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 72px;
    height: 90px;
  }
`

// const Arrow = styled.img`
//     display:none;

//   @media (min-width: ${breakpoints.mobile}) {
//     width: 28px;
//     height: 28px;
//     display:block;

//   }

//   @media (min-width: ${breakpoints.tablet}) {
//     width: 30px;
//     height: 30px;
//     display:block;


//   }
// `

const ContainerScorePoints = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #EAB816;
    border-radius: 30px;
    padding: 8px 16px;
    width: auto;
    min-width: 100px;
    height: auto;


  @media (min-width: ${breakpoints.mobile}) {
    padding: 10px 20px;
    min-width: 120px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 12px 24px;
    min-width: 137px;
    height: 63px;
  }
`

const TextScore = styled.p`
  font-weight: bold;
  color: white;
  font-size: 14px;
  margin: 0;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`

const LifeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${breakpoints.mobile}) {
    justify-content: flex-end;
    width: auto;
  }
`
const ContainerPointHealth = styled.div`
    display:grid;
    grid-template-columns: auto 1fr;
    gap:10px;
    align-items:center;
    @media (max-width: ${breakpoints.mobile}) {
        grid-template-rows: auto 1fr;
        grid-template-columns: auto;
        
    }
`

const NavBarGame = ({ points, nbLife, nbLifeMin }) => {
  const { setCursorType, pointer, cursor } = useContext(CursorContext)

  const handleMouse = (e, type) => () => setCursorType(type)

  return (
    <Navbar role="navigation" aria-label="Game navigation bar">
        <ContainerIconReturn>
            <NavLink to="/" aria-label="Retour à l'accueil">
            <ImageSebi
                onMouseEnter={handleMouse(null, pointer)}
                onMouseLeave={handleMouse(null, cursor)}
                onMouseDown={handleMouse(null, pointer)}
                onMouseUp={handleMouse(null, cursor)}
                draggable="false"
                src={iconSebi}
                alt="Logo Sebi la gazelle"
            />
            </NavLink>
        </ContainerIconReturn>

        <ContainerPointHealth>
            <ContainerScorePoints>
                <TextScore>SCORE {points} pt{points > 1 ? 's' : ''}</TextScore>
            </ContainerScorePoints>

            <LifeContainer>
                <LifeComponents nbLifeMin={nbLifeMin} nbLife={nbLife} />
            </LifeContainer>
        </ContainerPointHealth>
    </Navbar>
  )
}

export default NavBarGame
