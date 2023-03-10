import styled from "styled-components";

const Container = styled.div`
width:100%;

`;

const Wrapper = styled.div`
position:relative;
width: 100%;
margin: auto;
padding: 80px 20px;
`;
const InnerWrapper =styled.div`
text-align:center;
margin-bottom:20px;

    h3{
        font-family: 'Inter', sans-serif;
    }

 img{
    width:200px;
    height:220px;
    margin:50px auto;
 }
`;
InnerWrapper.P = styled.p`
font-size: 18px;
font-weight:500;
font-family: 'Inter', sans-serif;
margin-bottom:5px;
`



export{Container,Wrapper, InnerWrapper}