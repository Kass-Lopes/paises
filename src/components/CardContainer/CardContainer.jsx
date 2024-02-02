
import NotFound from '../NotFound/NotFound'
import './main.css'

export default function CardContainer( {cardsByFunc, value} ){

    return(
        <div className='CardContainer'>
            { (value.length > 0) ? cardsByFunc() : <NotFound/>  }
            
        </div>
    )
}