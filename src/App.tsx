import * as C from './App.styles'
import { useEffect, useState,} from 'react';


import logo from './img/logo.png';
import iconButton from './svg/restart.svg'

import { Button } from './components/button/button';
import { time } from './helpers/helperes';
import { GridCard } from './components/gridCard/gridCard';


import { ListItem } from './data/item';
import { Grid } from './types/grid';



function App() {
  
  const [gamerStart,setGamerStart] = useState <Boolean> (true)
  const [changeTime,setChangeTime] = useState <number>(0) ;
  const [changeMov,setChangeMov] = useState <number>(0) ;
  const [mov,setMov] = useState <number>(0)
  const [grid,setGrid] = useState<Grid[]>([])

  useEffect (()=> creationGrid(), [])

  useEffect (()=>{
    if(gamerStart){
      let addtime = setInterval(()=>{
        setChangeTime(changeTime + 1)
      },1000)
      return ()=> clearInterval(addtime)
    }
  },[changeTime])

  useEffect(()=>{
    if(mov === 2){
      let listComparison:Grid[] = grid.filter(item => item.show );
      if(listComparison.length === 2){
        let tempGrid = [...grid]
       
        if(listComparison[0].item === listComparison[1].item){
            for(let i in tempGrid){
              if(tempGrid[i].show){
                tempGrid[i].permanentShow = true;
                tempGrid[i].show = false;
                setMov(0)
              }
            }
         }else{
          setTimeout(()=>{
            for(let d in tempGrid){
             tempGrid[d].show = false
             setMov(0)
            }
          },700)
         }
         setChangeMov(changeMov +1)
         setGrid(tempGrid)
      }   
    }
  },[mov])
  
  useEffect(()=>{
    if( mov>0 && grid.every(item=>item.permanentShow ))
    setGamerStart(false)
  },[grid,mov])


const creationGrid = ()=>{
  setChangeTime(0)
  setMov(0)
  setChangeMov(0)

  let gridTemp:Grid [] = [];
  
  for (let i = 0; i < ListItem.length * 2;i++){
    gridTemp.push({show:false,permanentShow:false,item:null})
  }
  for(let d = 0; d < 2 ; d++){
    for(let g = 0 ; g < ListItem.length ;g++){
      let pos = -1;
      while(pos < 0 || gridTemp[pos].item !== null){
        pos = Math.floor(Math.random() * gridTemp.length)
      }
      gridTemp[pos].item = g
    }
  }
  setGrid(gridTemp)
}

const displayCard = (index:number)=>{
    if(gamerStart && index !==null && mov < 2 && grid[index].show === false ){
      let tempGrid = [...grid]
      tempGrid[index].show = true 
      setGrid(tempGrid) 
      setMov(mov + 1)
    }
    console.log(mov)
}

const rest = ()=>{
  setChangeTime(0)
  setChangeMov(0)
  creationGrid()
  setGamerStart(true)
}

  return (
    <C.AreaContanier>
      <C.Contanier >
        <C.AreaInfo >
          <C.LogoImg src={logo}></C.LogoImg>
          <C.TimeS>
            <h4>Tempo</h4>
            <span>{time(changeTime)}</span>
          </C.TimeS>
          <C.Mov>
            <h4>Movimento</h4>
            <span>{changeMov}</span>
          </C.Mov> 
          <Button txt = 'Reniciar' icon={iconButton} cl = '#00429C' on={rest}  />
        </C.AreaInfo>
        <C.AreaGamer  >
          {grid.map((item ,index)=>(
            <GridCard key={index} item= {item}  onEvent={()=>{displayCard(index)}}/>
          ))}
        </C.AreaGamer>
      </C.Contanier>
    </C.AreaContanier>
  )
}

export default App
