import React from "react"
import {FaMoon} from 'react-icons/fa'

import { Link } from "react-router-dom"

import './main.css'

export default function Header(){
    
    return(
        <header className="header">
             <Link to='/'> <h3>Countries</h3></Link>
            <p>
                <FaMoon/>
            </p>
        </header>
    )
}