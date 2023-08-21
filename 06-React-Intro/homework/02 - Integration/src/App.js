import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import characters, { Rick } from './data.js';
import Nav from './components/Nav';
import { useState } from 'react';


function App() {
   
   const [characters,setCharacters]=useState([])
   
   function onSearch(id){
            
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response)=>response.json())
      .then((data)=>{
         if(data.name){
            setCharacters((oldChars)=>[...oldChars, data])
            //setCharacters([...characters,data])
         }else{
            window.alert("No hay personjes con ese ID")
         }
      })
   }
   
   return (
      <div className='App'>
         <div><Nav onSearch={onSearch} /></div>
         <div><Cards characters={characters} /></div>
         {/* <div><Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /></div> */}
      </div>
   );
}

export default App;
