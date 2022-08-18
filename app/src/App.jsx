import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './context/globalContext';
import {AiOutlineHeart, AiOutlineClose} from 'react-icons/ai'
import {TbArrowsLeftRight,TbArrowNarrowRight} from 'react-icons/tb'



function App() {
  const {favs,deleteFromFavourites,convertOptions,addToFavourites,selectedOption,toggleValue,iptValue,handleIptValue,result,setFavs,setSelectedOption}=useContext(GlobalContext)

  useEffect(()=>{
    const localFavs = localStorage.getItem('favs')
    !localFavs && localStorage.setItem('favs',JSON.stringify([]))
    setFavs(JSON.parse(localFavs))
  },[])

  
  
  
  return (
    <>
      <header>
        <h2 className='headTitle'><TbArrowsLeftRight/>unit converter</h2>
      </header>

      <div className="convertContainer">
        <h2 className='convertTitle'>convert</h2>

        <div className="inputContainer">
          <select name="Convert" id="convertIpt" value={selectedOption} onChange={(e)=>{setSelectedOption(e.target.value)}}>
            {convertOptions.map(elem=>
              <option key={elem.name} value={convertOptions.indexOf(elem)}>{elem.name}</option>
            )}
          </select>
          <TbArrowsLeftRight onClick={toggleValue}/>
          
          <input type="number" value={iptValue} autoFocus onChange={handleIptValue}/><span>{convertOptions[selectedOption].from}</span>
        </div>

        <span className='bottomLine'>
          <AiOutlineHeart className='heart' onClick={addToFavourites}/>
          <h2 className='result'>{result} {convertOptions[selectedOption].to}</h2>
        </span>
      </div>

      <section className="favs">
        <h3>Saved</h3>
        <span className='favList'>
        {favs.map(element=>
          <div key={favs.indexOf(element)}>
            <span className='favData'>{element.fromValue} {element.fromName} <TbArrowNarrowRight className='arrow'/> {element.toValue} {element.toName}</span>
            <AiOutlineClose className='delete' onClick={()=>{deleteFromFavourites(favs.indexOf(element))}} />
          </div>
          )}
        </span>
      </section>
      <footer>
        <a href="">Terms of service</a>
        <a href="">Privacy policy</a>
      </footer>
    </>
  )
}

export default App;
