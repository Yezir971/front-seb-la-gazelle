import styled, { keyframes } from "styled-components"


const prixClipFix = keyframes`
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
`
const Load = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    transform:rotate(45deg);
    background: #fff;
    &:after{
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border:24px solid #6D67C9;
        animation: ${prixClipFix} 2s infinite linear;
    }
`



const Loader = () => {
    return(
        <>
            <Load></Load>
        </>
    )
}
export default Loader