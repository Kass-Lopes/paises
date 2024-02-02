import React from "react"
import Header from "../../components/Header/Header"
import { useState } from "react"
import data from '../../database/data.json'

import './main.css'
import Input from "../../components/Input/Input"
import Cards from "../../components/Cards/Cards"
import CardContainer from "../../components/CardContainer/CardContainer"
import Footer from "../../components/Footer/Footer"

export default function Home(){

    const [inputValue, setInputValue] = useState('')
    const [region, setRegion] = useState('')

    const filter = data.filter((country)=> country.translations.pt.toString().toLowerCase().includes(inputValue.toLowerCase()) && 
    country.region.toLowerCase().includes(region.toLowerCase()) )

    function getSelectedRegionValue(e){
        setRegion( e.target.value)
    }
    
    function inputGetValue(e){
        setInputValue( e.target.value )
    }

    function GetCountries(){
        return filter.slice(0,16).map((country, index)=>{
            return <Cards 
            name={country.translations.pt}
            population={country.population}
            area={country.area}
            region={country.region}
            key={index} imageLink={country.flags.png}/>
        })
    }

    return(
        <div className="container">  
            <Header />
            <Input handleChangeInput={inputGetValue} value={inputValue} SelectRegion={getSelectedRegionValue}/>
            <CardContainer cardsByFunc={GetCountries} value={filter}  />
            <Footer />
        </div>
    )
}