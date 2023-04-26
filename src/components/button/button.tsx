import * as C from './button.styles' 

type Porps = {
    txt:string,
    icon: any,
    cl?:string,
    on: React.MouseEventHandler<HTMLDivElement>
}


export const Button = ({txt,icon,on}: Porps )=>{
    return (
        <C.Contanier onClick={on}>
            <C.Logo><img src={icon} alt="" /></C.Logo>
            <C.AreaTxt>{txt}</C.AreaTxt>
        </C.Contanier>
    )
}