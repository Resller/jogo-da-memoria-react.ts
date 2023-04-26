export const time = (timeadd:number)=>{
    let minutes = Math.floor(timeadd / 60 ) 
    let seconds = timeadd % 60 
    
    let minutesString = `${minutes < 10 ? '0'+ minutes : minutes}`;
    let secondsString = `${seconds < 10 ? '0'+ seconds : seconds}`;
    
    return `${minutesString}:${secondsString}`

}