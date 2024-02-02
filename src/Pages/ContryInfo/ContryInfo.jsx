import React, { useEffect } from "react"

import data from '../../database/data.json'

import './main.css'
import { Link, useParams } from "react-router-dom"

export default function ContryInfo(){

    const params = useParams()

    const filtred = data.filter( (country)=> country.translations.pt.toString().includes(params.name) )


    console.log(data)

    return(
        <div className="infoContainer">
            <div className="infoDataArea">
            <Link to='/'> <button>Voltar</button> </Link>
                <div>
                    <p>
                        Nome: 
                        <h3>{filtred[0].name} </h3>
                    </p>
                    <p>
                        Nome Nativo:  
                        <h3>{filtred[0].nativeName} </h3>
                    </p>
                    <p>Capital: {filtred[0].capital}</p>
                    <p>Continente: {filtred[0].region} </p>
                    <p>Moeda: {filtred[0].currencies[0].name+' ('+ filtred[0].currencies[0].code +')'} </p>
                    <p>Domínio: {filtred[0].topLevelDomain} </p>
                    <p>Línguas: {filtred[0].languages[0].nativeName+' / '+filtred[0].languages[0].name } </p>
                    <p>Nacionalidade: {filtred[0].demonym} </p>
                    <p>População: {filtred[0].population.toLocaleString('pt-br')} </p>
                    <p>Código de Chamadas: {filtred[0].callingCodes} </p>

                </div>
            </div>

            <div className="infoImageArea">
                <img src={filtred[0].flag} alt="" style={ {width:'100%', height:'100%'} } />
            </div>
        </div>
    )
}