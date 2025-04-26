import Bubble from "./Bubble"
import styled from "styled-components";
import james from "../assets/img/avatars/james-full-body-without-fond.webp"

const breakpoints = {
    mobile: '600px',
    tablet: '900px',
    medium: '1180px',
  }

const Container = styled.div`
    width: 170px;
    height: 170px;
    position: relative;
    @media (max-width: ${breakpoints.medium}) {
        width:100px;
        height:100px;
    }
`
const Image = styled.img`
  position: absolute;
  width: 170px;
  @media (max-width: ${breakpoints.medium}) {
      width:100px;
  }
`
const ContainerAnimation = styled.div`
    display:flex;
    position:absolute;
    bottom:-30px;
    right:0px;
    @media (max-width: ${breakpoints.medium}) {
        bottom:-10px;
        right:0px;
    }
`

const ContainerBubble = styled.div`

`

const James = ({firstAnswer, message}) => {

    return (
        <ContainerAnimation>
            <ContainerBubble>
            {firstAnswer && (
                <Bubble replique="JamesDebutJeu" repliqueSound="" guili={false} />
            )} 
            { !firstAnswer ? 
            message ? (
                <Bubble replique="jamesJeuBonneReponse" repliqueSound="jamesReplique1" guili={false} />
            ) :
            !message ?(
                <Bubble replique="jamesJeuMauvaiseReponse" repliqueSound="jamesReplique2" guili={false} />
            ): null
            : null}
            </ContainerBubble>
            <Container>
                <Image src={james} alt="james" style={{zIndex: 2}}/>
            </Container>
        </ContainerAnimation>
    )
}

export default James