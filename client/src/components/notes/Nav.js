import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav({setIsLogin}) {

    const logoutSubmit = () =>{
        localStorage.clear()
        setIsLogin(false)
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">Smart Notes</Link></h1>
            </div>
            <ul>
                <li><Link to="/"><b>Home</b></Link></li>
                <li><Link to="/create"><b>Create Note</b></Link></li>
                <li onClick={logoutSubmit}><Link to="/"><b>Logout</b></Link></li>
            </ul>
        </header>
    )
}
