import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Users() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = async()=>{
        const userList = await axios("https://jsonplaceholder.typicode.com/users");
        setUsers(userList.data);
    }
  return (
    <div>
        <h4>Users</h4>
        <ul>
        {users.map((user)=>(
            <li key={user.id}><Link to={`${user.id}`}>{user.name}</Link></li>
        ))}
        </ul>
    </div>
  )
}
