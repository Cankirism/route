import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
        <Link to="/about">Hakkında</Link>
        <Link to="/users">Kullanıcılar</Link>

    </div>
  )
}
