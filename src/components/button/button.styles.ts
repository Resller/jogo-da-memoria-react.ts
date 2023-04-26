import styled from "styled-components";


export const Contanier = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding : 5px;
    border-radius:5px;
    background-color: #00489F;
    color:#FFF;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    position: relative;
    width: 100%;
    z-index: 99;
        
    &::before{
        content: '';
        z-index: -1;
        width: 0%;
        height: 100%;
        background-color: #E7C300;
        position: absolute;
        top: 0;
        left: 0;
        border-radius:5px;
        transition: all ease .8s;
    }
    &:hover::before{
        width: 100%;
    }
    @media(max-width:770px){
        width: auto;
     }

`
export const Logo = styled.div`
    padding : 5px 10px;
    border-right: solid 2px #ccc;
`
export const AreaTxt = styled.div`
    padding : 0 25px;
`

