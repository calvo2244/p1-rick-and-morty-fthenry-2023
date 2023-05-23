import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.container}>
         <div className={style.containerCard}>
            <div className={style.front}>
               <img
                  src={image}
                  alt={name}
                  className={style.imagen}
               />
            </div>

            <div className={style.back}>
               <button
                  className={style.btn}
                  // onClick={onClose}> X  //se remplaza por funcion para ejecutar 
                  onClick={() => onClose(id)}> X
               </button>
               <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
               </Link>
               <h2>{status}</h2>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{origin}</h2>
            </div>
         </div>
      </div>
   );
}
