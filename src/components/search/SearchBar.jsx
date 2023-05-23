import style from "./SearchBar.module.css"
// import imageLogo from "../../image/logo.png"
import { useState } from "react"

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");
   // console.log(id);

   const handleChange = (evento) => {
      setId(evento.target.value)//target hace referencia a el input
      // console.log(id);
   }

   const handleEnter = (event) => {
      if (event.key === "Enter") {
         // window.alert("characterID")         
         onSearch(id)
      }
   }



   return (
      <div className={style.containerSearch}>
         {/* <img
            src={imageLogo}
            alt="logo Ricky and Morty"
            className={style.logo}
         /> */}
         <div className={style.containerInput}>
            <input
               type="search"
               className={style.input}
               onChange={handleChange}
               onKeyUp={handleEnter}
               placeholder="Search ...."
               value={id}
            />
            {/* <button onClick={onSearch}>Agregar</button> */}
            {/* <button onClick={(id) => { onSearch(id) }}>Agregar</button> */}
            <button
               className={style.btn}
               onClick={() => onSearch(id)}
            > </button>
         </div>
      </div>
   );
}

