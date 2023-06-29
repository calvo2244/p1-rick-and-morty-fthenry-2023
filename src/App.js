import './App.css';
import Cards from './components/cards/Cards.jsx';
import About from "./components/About/About.jsx";
import Nav from './components/nav/Nav';
import Detail from './components/Detail/detail';
import FormLogin from './components/FormLogin/FormLogin.jsx';
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App() {

   //! HOOKS
   // Crea un estado local llamado characters el cual se debe inicializar como un arreglo vacío.x|
   const [characters, setCharacters] = useState([]);
   // console.log(location);// pathname me muestra donde esta ubicado 
   const { pathname } = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();



   //! CREDENCIALES FAKE
   const username = "calvo2244@hotmail.com"
   const password = "Pass1234@"



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

   function login (userData){
      // console.log("ingresa a login",userData);
      if (userData.username === username && userData.password === password) {
         setAccess(true);
         return navigate("/home");
      } else {
         alert("credenciales incorrectas")
      }
   };
   const logout = () => {
         setAccess(false);
         navigate("/");
         // console.log("se esta cerrando");
   };

   //App.js
   useEffect(() => {
      !access && navigate("/");
      // console.log("aplica useeffect");
   }, [access]);

   //!RENDER
   return (
      <div className='container'>
         {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
         <hr />
         <Routes>
            <Route path='/' element={<FormLogin login={login} />} />
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
