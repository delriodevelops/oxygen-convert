import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import {AiOutlineHeart}from 'react-icons/ai'

export default function FavBtn(){
    const {addToFavourites,result,convertOptions,selectedOption}=useContext(GlobalContext)
    return(
        <span className='bottomLine'>
          <AiOutlineHeart className='heart' onClick={addToFavourites}/>
          <h2 className='result'>{result} {convertOptions[selectedOption].to}</h2>
        </span>
    )
}