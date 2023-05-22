// import Card from './components/Card.jsx';
// import SearchBar from './components/search/SearchBar.jsx';
// import characters, { Rick } from './data.js';
// import characters from './data.js';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState } from "react";



function App() {

   // Crea un estado local llamado characters el cual se debe inicializar como un arreglo vacío.x|
   let [characters, setCharacters] = useState([]);

   function onSearch(id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then(response => response.json())
         .then((data) => {
            if (data.name && !characters.find(char => char.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }
   const onclose = (id) => {
      //filter ..... no modifica el array original 
      setCharacters(characters.filter((char) => char.id != id));
   };

   // const onSearch = (id) => {
   //    // const URL_BASE2 = "https://be-a-rym.up.railway.app/api"
   //    const URL_BASE = "https://rickandmortyapi.com/api/character/"
   //    // const KEY = "";
   //    fetch(`${URL_BASE}/${id}`)
   //       .then(response => response.json())
   //       .then(data => {
   //          if (data.id) {
   //             setCharacters((oldChars) => [...oldChars, data])
   //             // setCharacters([...characters, data])
   //          } else {
   //             console.log(data.id);
   //             alert("algo salio mal")
   //          }
   //       })
   // }

   // const onSearch = async (id) => {
   //    const URL_BASE = "https://rickandmortyapi.com/api/character/";
   //    //await espera la peticion de fetch a la api
   //    const api = await fetch(URL_BASE);
   //    const characterApi = await api.json();
   //    setCharacters(characterApi.results);// results es parte de lo que trae de la api
   //    console.log("hola prueba ");
   // }


   return (
      <div className='container'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Nav onSearch={onSearch} />
         <hr />
         <Cards characters={characters} onClose = {onclose}/>
      </div>
   );
}

export default App;
