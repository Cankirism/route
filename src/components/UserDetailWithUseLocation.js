import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function UserDetailWithUseLocation() {
    const location = useLocation();
    const {id} = useParams();
    const[user,setUser]=useState(location.state)
    useEffect(()=>{
        console.log(user)
        if(!user){
            fetch( `https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res=>res.json())
            .then(user=>setUser(user));
        }
    },[user])
  return (
    <div>
        <h3>UserDetailWithUseLocation</h3>

        {user &&<pre>{JSON.stringify(user)}</pre>  }

    </div>
  )
}
