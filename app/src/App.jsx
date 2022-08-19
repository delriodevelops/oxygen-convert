import './App.css';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './context/globalContext';
import {TbArrowsLeftRight} from 'react-icons/tb'
import FavList from './components/FavList';
import Inputs from './components/Inputs';
import FavBtn from './components/FavBtn';



function App() {
  const {setFavs}=useContext(GlobalContext)

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
        <Inputs/>
        <FavBtn/>
      </div>

      <section className="favs">
        <h3>Saved</h3>
        <FavList/>
      </section>

      <footer>
        <a href="">Terms of service</a>
        <a href="">Privacy policy</a>
      </footer>
    </>
  )
}

export default App;
