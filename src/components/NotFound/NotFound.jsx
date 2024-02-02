import React from "react"
import { Link } from "react-router-dom"
import './main.css'

import { useState } from "react"

export default function NotFound(){

    return(
        <div className="notFound">  
            <Link to='/'>
                <p>Country Not Found - Go to Home</p>
            </Link>
        </div>
    )
}