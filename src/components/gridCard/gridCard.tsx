import { Grid } from '../../types/grid'
import * as C from './gridCard.styles'
import ball from '../../img/Bola.png'
import { ListItem } from "../../data/item"

type Props = {
    item:Grid,
    onEvent:()=> void,
}

export const GridCard = ({item,onEvent}:Props)=>{

    return(
        <C.Card onClick={onEvent} >
                {(item.permanentShow === false && item.show === false) && 
                    <C.Area bg = {false} opacity = '0.9' >
                        <img src={ball} alt="" />
                    </C.Area>
                }
            
                {(item.show || item.permanentShow) && item.item !== null  && 
                    <C.Area bg  opacity = '1' >
                        <img src={ListItem[item.item].img} alt={ListItem[item.item].name} />
                    </C.Area>
                }    
        </C.Card>
    )
}