import styled from "styled-components"
import imageCharly from "../assets/img/charly-full-body.webp";
import Bubble from "./Bubble";

const Container = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`
const Image = styled.img`
  position: absolute;
  width: 200px;
`


const ContaineAnimation = styled.div`
  display:flex;
  position:absolute;
  bottom:200px;
  right:0px;
`


const Charly = ({isFirstAnser}) => {
    return(
        <ContaineAnimation>
            <div>
                {isFirstAnser ? (
                
                    <Bubble guili={false} replique="charlyFound" repliqueSound="charlyReplique1" />
                    
                ):(
                
                    <Bubble guili={false} replique="charlyJeu" repliqueSound="" />
                    
                )}
            </div>

            <Container>
                <Image src={imageCharly} alt="Charly"/>
            </Container>

      </ContaineAnimation>
    )
}

export default Charly