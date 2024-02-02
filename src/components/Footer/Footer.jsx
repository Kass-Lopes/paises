import React from "react"
import {FaFacebook, FaGithub, FaWhatsapp} from "react-icons/fa"

import './main.css'

export default function Footer(){

    return(
        <footer>  
            <div>
                <a href="https://facebook.com/Kass.lopes0/" target="_blank">
                    <FaFacebook />
                </a>
                
                <a href="https://github.com/Kass-Lopes" target="_blank">
                    <FaGithub />
                </a>

                <a href="https://wa.link/lkr7xr" target="_blank">
                  <FaWhatsapp />
                </a>
            </div>
            <p>Kass Lopes - 2024 &copy; </p>
        </footer>
    )
}