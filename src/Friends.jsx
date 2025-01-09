import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'
export default function Friends(){
    // 1. state declare to hold data
    const [friends,setFriends] =useState([])
    // 2. use effect with dependency array
    useEffect(()=>{
        // 3. use fecth to load data
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        // 4. call loaded data with state
        .then(data=>setFriends(data))
    },[])
    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}