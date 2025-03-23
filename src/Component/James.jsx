import Bubble from "./Bubble"
import styled from "styled-components";
import james from "../assets/img/james-full-body-without-fond.png"



const Container = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`
const Image = styled.img`
  position: absolute;
  width: 200px;
`
const ContainerAnimation = styled.div`
  display:flex;
  position:absolute;
  bottom:0px;
  right:0px;

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