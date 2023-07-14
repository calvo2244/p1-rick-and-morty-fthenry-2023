import './App.css';
import Cards from './components/cards/Cards.jsx';
import About from "./components/About/About.jsx";
import Nav from './components/nav/Nav';
import Detail from './components/Detail/detail';
import FormLogin from './components/FormLogin/FormLogin.jsx';
import Favorites from "./components/Favorites/Favorites.jsx"
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { removeFav, addChar, removeChar } from "./redux/action.js";
import { useDispatch, useSelector } from "react-redux";

function App() {

   //! HOOKS
   // Crea un estado local llamado characters el cual se debe inicializar como un arreglo vacío.x|
   // const [characters, setCharacters] = useState([]);
   // console.log(location);// pathname me muestra donde esta ubicado 
   const { pathname } = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();



   //! CREDENCIALES FAKE
   const username = "calvo2244@hotmail.com"
   const password = "Pass1234@"



   //!HANDLERS
   const { characters } = useSelector((state) => state);

   function onSearch(id) {
      const URL_BASE = "https://rickandmortyapi.com/api/character/"; //para front 
      // const URL_BASE = "http://localhost:3001/rickandmorty/character";

      // axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      axios(`${URL_BASE}/${id}`).then(
         ({ data }) => {
            if (data.name) {
               const char = characters.find((ch) => ch.id === Number(id));
               if (char) return alert(`Ese characters id: ${id}, ya existe`);
               dispatch(addChar(data));
            } else {
               window.alert("¡No hay personajes con este ID!");
            }
         }
      );
   };



   const onclose = (id) => {
      //    //filter ..... no modifica el array original 
      //    setCharacters(characters.filter((char) => char.id !== id));
      dispatch(removeChar(Number(id)));
      dispatch(removeFav(Number(id)));
   };

   function login(userData) {
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
   }, [access, navigate]);

   const dispatch = useDispatch();

   useEffect(() => {
           axios.get(`http://localhost:3001/rickandmorty/characters`)
        .then((results) => {
            // console.log(":::", results.data);
             dispatch(addChar([...results.data]));
         })
   }, [dispatch]);



   //!RENDER
   return (
      <div className='container'>
         {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
         <hr />
         <Routes>
            <Route path='/' element={<FormLogin login={login} />} />
            <Route
               path="/home"
               element={<Cards onClose={onclose} />}
            />
            <Route path="/about" element={<About c={"c"} />} />
            <Route path="/detail/:detailId" element={<Detail />} />
            <Route path="/favorites" element={<Favorites onClose={onclose} />} />

         </Routes>
      </div>
   );
}

export default App;
