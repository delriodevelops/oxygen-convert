import Options from "./Options";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import {TbArrowsLeftRight} from 'react-icons/tb'

export default function Inputs(){
  const {toggleValue,iptValue,handleIptValue,convertOptions,selectedOption}=useContext(GlobalContext)
  return(
        <div className="inputContainer">
            <Options/>
            <TbArrowsLeftRight onClick={toggleValue}/>
            <input type="number" value={iptValue} autoFocus onChange={handleIptValue}/>
            <span>{convertOptions[selectedOption].from}</span>
        </div>
    )
}