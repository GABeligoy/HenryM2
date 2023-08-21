import { useState } from "react";

export default function SearchBar(props) {
   const[id, setId]=useState("")
   function handleChange(event){
      setId(event.target.value)
   }
   return (
      <div>
         <input type='search' value={id} onChange={handleChange} placeholder="Ingrese id..."/>
         <button onClick={()=>{props.onSearch(id)}}>Agregar</button>
      </div>
   );
}
