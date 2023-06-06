import './App.css';
import Cards from './components/cards/Cards.jsx';
import About from "./components/About/About.jsx";
import Nav from './components/nav/Nav';
import Detail from './components/Detail/detail';
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form.jsx';




function App() {

   //! HOOKS
   // Crea un estado local llamado characters el cual se debe inicializar como un arreglo vacío.x|
   const [characters, setCharacters] = useState([]);
   // console.log(location);// pathname me muestra donde esta ubicado 
   const { pathname } = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   //App.js
   useEffect(() => {
      !access && navigate("/");
   }, [access]);


   //! CREDENCIALES FAKE
   const username = "calvo2244@hotmail.com"
   const password = "Heag6342"



   //!HANDLERS
   function onSearch(id) {
      const URL_BASE = "https://rickandmortyapi.com/api/character/";

      if (characters.find((char) => char.id === id)) {
         return alert("personaje repetido")
      }

      fetch(`${URL_BASE}/${id}`)
         .then(response => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   };

   const onclose = (id) => {
      //filter ..... no modifica el array original 
      setCharacters(characters.filter((char) => char.id !== id));
   };

   const login = (userData) => {
      if (userData.username === username && userData.password === password) {
         setAccess(true);
         navigate("/home");
      } else {
         alert("credenciales incorrectas")
      }

   };


   //!RENDER
   return (
      <div className='container'>
         {pathname !== "/" && <Nav onSearch={onSearch} />}
         <hr />
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route
               path="/home"
               element={<Cards characters={characters} onClose={onclose} />}
            />
            <Route path="/about" element={<About c={"c"} />} />
            <Route path="/detail/:detailId" element={<Detail />} />

         </Routes>
      </div>
   );
}

export default App;
