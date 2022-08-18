import { createContext,useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({children})=>{

    const [selectedOption,setSelectedOption]=useState(0)
    const [iptValue,setIptValue]=useState('')
    const [result,setResult]=useState(iptValue)
    const [favs,setFavs]=useState([''])
  
    const addToFavourites = ()=>{
        if(iptValue!==''){
        
        const obj = {
          fromValue:iptValue,
          fromName:convertOptions[selectedOption].from,
          toValue:result,
          toName:convertOptions[selectedOption].to,
        }
    
        const newFavs = [obj,...favs]
        localStorage.setItem('favs',JSON.stringify(newFavs))
        refreshFavs()
      }
      }
    
      function refreshFavs() {
        const localFavs = getLocalStorage('favs')
        setFavs(localFavs)
      }
    
      const deleteFromFavourites = (index)=>{
        const newFavs= favs.splice(index,1)
        setFavs(newFavs)
        localStorage.setItem('favs',JSON.stringify(favs))
        refreshFavs()
      }
       
      const handleIptValue = (e)=>{
        setIptValue(e.target.value)
        setResult((e.target.value*convertOptions[selectedOption].product).toFixed(2))
      }

    function getLocalStorage(key){
      const obj = localStorage.getItem(key)
      return JSON.parse(obj)
    }
  
    
    class Option{
        constructor(name,product){
      
          const arr= name.split('-')
      
          this.name=name;
          this.product=product;
          this.from= arr[0]
          this.to= arr[1]
        }
      }
      
      const convertOptions = [new Option('Km-miles',.62),new Option('miles-Km',1.6),new Option('feet-metres',.3),new Option('metres-feet',3.28),new Option('cm-inches',0.39),new Option('inches-cm',2.54)]
      
    const toggleValue = ()=>{
        if(selectedOption%2===0 || selectedOption===0){
          setSelectedOption(selectedOption+1)
        } else {
          setSelectedOption(selectedOption-1)
        }
    
        const visagra = result
        setResult(iptValue)
        setIptValue(visagra)
    }

    const value = {
        favs,
        deleteFromFavourites,
        convertOptions,
        addToFavourites,
        selectedOption,
        toggleValue,
        iptValue,
        handleIptValue,
        result,
        selectedOption,
        setFavs,
        setSelectedOption
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}