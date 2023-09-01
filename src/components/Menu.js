import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function () {
  return (
    <div className='Menu-bar'>
        <Link to="/about" >Hakkında</Link>
        <Link to="/users" className='User-link'>Kullanıcılar</Link>
        <Link to ="/withuselocation" className='Menu-bar'>UseLocation Sample</Link>

    </div>
  )
}
