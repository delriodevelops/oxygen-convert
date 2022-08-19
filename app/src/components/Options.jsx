import { GlobalContext } from "../context/globalContext";
import { useContext } from "react";
export default function Options(){
    const {selectedOption,setSelectedOption,convertOptions}=useContext(GlobalContext)
    return(
        <select name="Convert" id="convertIpt" value={selectedOption} onChange={(e)=>{setSelectedOption(e.target.value)}}>
            {convertOptions.map(elem=>
              <option key={elem.name} value={convertOptions.indexOf(elem)}>{elem.name}</option>
            )}
        </select>
    )
}