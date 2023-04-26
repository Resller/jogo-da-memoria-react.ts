import styled from "styled-components";

type props = {
    bg:boolean
    opacity:string
    
}



export const Card = styled.div`
    width: 100%;
`

export const Area =styled.div<props>`
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px; 
    cursor: pointer;
    box-shadow: 0 0 7px #333;
    background-color:  ${props => props.bg ? '#ECC800' :'#26980E'  }   ;
    height: 85%;

    img{
        height: 80px;
        opacity:${props => props.opacity};
    }

    @media(max-width:380px){
        padding: 5px;
        border-radius: 5px; 
        img{
            height: 70px;
        }
     }

`