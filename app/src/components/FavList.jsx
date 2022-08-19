import { useContext } from "react"
import { GlobalContext } from "../context/globalContext"
import { AiOutlineClose} from 'react-icons/ai'
import {TbArrowNarrowRight} from 'react-icons/tb'
export default function FavList(){

    const {favs,deleteFromFavourites}=useContext(GlobalContext)

    return(
        <span className='favList'>
        {favs.map(element=>
          <div key={favs.indexOf(element)}>
            <span className='favData'>{element.fromValue} {element.fromName} <TbArrowNarrowRight className='arrow'/> {element.toValue} {element.toName}</span>
            <AiOutlineClose className='delete' onClick={()=>{deleteFromFavourites(favs.indexOf(element))}} />
          </div>
          )}
        </span>
    )
}