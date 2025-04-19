import styled from "styled-components"
import imageCharly from "../assets/img/charly-full-body.webp";
import Bubble from "./Bubble";

const breakpoints = {
  mobile: '600px',
  tablet: '900px',
  medium: '1180px',
}
const Container = styled.div`
  width: 170px;
  height: auto;
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


const ContaineAnimation = styled.div`
  display:flex;
  // position:absolute;
  // bottom:0px;
  // right:0px;
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