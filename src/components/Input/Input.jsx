import {FaSearch} from 'react-icons/fa'

import './main.css'

export default function Input( {handleChangeInput, value, SelectRegion} ){


    return(
        <div className='InputThings'>
            <div className='InputArea'>
                <FaSearch />
                <input type="text" value={value} onChange={ handleChangeInput } className='input' />
            </div>

            <div className='SelectArea'>
                <select name="Select" id="select" className='select' onChange={SelectRegion}>
                    <option disabled>Filtrar Por Continente</option>
                    <option value="">Todos os Países</option>
                    <option value="Africa">África</option>
                    <option value="America">América</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}