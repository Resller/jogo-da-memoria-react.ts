
import styled from "styled-components";

export const AreaContanier = styled.div`
    width:100%;
    background-color: #f7f7f7;
    height: 100vh;
    display: flex;
    justify-content: center;  

`
export  const Contanier = styled.div`
    width: 100%;
    max-width: 750px;
    display:flex;
    padding:40px 0;
    gap:40px;
    @media(max-width:770px){
        flex-direction :  column;
        align-items: center;
         
     }

`
export const AreaInfo = styled.div `
    display:flex;
    flex-direction: column;
    gap:30px;
   
    @media(max-width:770px){
        justify-content: center;
        align-items: center;
     }

`
export const LogoImg = styled.img`
    width:100px;
`
export const TimeS = styled.div`
 h4{
    font-size: 18px;
    color: #333;
    margin:0;
    padding:10px 0px;
 }
 span{
    font-size: 40px;
    color: #00429C;
    font-weight: 600;
 }

`
export const Mov = styled.div`
 h4{
    font-size: 18px;
    color: #333;
    margin:0;
    padding:10px 0px;
 }
 span{
    font-size: 40px;
    color:#00429C;
    font-weight: 600;
 }
`
export const AreaGamer = styled.div `
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
    row-gap: 10px;
    width:100%;

    @media(max-width:770px){
        grid-template-columns: repeat(3,fr);
        width:94%;
     }

`