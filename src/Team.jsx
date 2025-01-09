import { useState } from "react"
export default function Team(){
    const [team,setTeam]=useState(11)
    const teamStyle ={
        border:'2px solid gray' ,
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    const playerAdd=()=>{
        const newTeam = team+1 
        setTeam(newTeam)
    }
    const playerRemove=()=>{
        const newTeam = team-1 
        setTeam(newTeam)
    }
    return(
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={playerAdd}>Add Player</button>
            <button onClick={playerRemove}>Remove Player</button>
        </div>
    )
}