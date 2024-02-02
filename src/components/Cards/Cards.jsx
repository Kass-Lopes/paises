import { Link } from 'react-router-dom'
import './main.css'

export default function Cards( {name, population, area, region, imageLink} ){

    return(

        <Link to={`moreInfo/${name}`} style={ {textDecoration:'none'} } >
            <div className='Cards'>
            <div>
                    <img src={imageLink} alt="" />
            </div>

            <h3>Nome: {name} </h3>
            <p>População: {population.toLocaleString('pt-br')} </p>
            <p>Continente: {region} </p>
            <p>Área Total: {area} Km<sup>2</sup> </p>
            </div>
        </Link>
    )
}