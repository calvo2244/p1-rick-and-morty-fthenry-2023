import style from "./Card.module.css";
import { Link } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
import { addFav, removeFav } from "../../redux/action";

import { useEffect, useState } from "react";

function Card( props) {

   const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props

   //! hook
   // segunda forma mapDispatchToProp
   // const dispatch = useDispatch
   // dispatch(addFav({}))

   const [isFav, setItsFav] = useState(false)

   function handleFavorite() {
      if (isFav) {
         setItsFav(false)
         removeFav(id)
      } else {
         setItsFav(true);
         addFav(props);
      }
   }
   useEffect(()=>{
      myFavorites.forEach((fav) => {
         if (fav.id=== props.id) {
            setItsFav(true);            
         }         
      });

   },[myFavorites]);

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
                  {
                     isFav ? (
                        <button className={style.btnFav}  onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button className={style.btnFav} onClick={handleFavorite}>🤍</button>
                     )
                  }
                  <button
                     className={style.btnClose}
                     // onClick={onClose}> X  //se remplaza por funcion para ejecutar 
                     onClick={() => onClose(id)}> X
                  </button>
               
               <Link to={`/detail/${id}`}>
                  <h2>{name}</h2>
                  <h2>{status}</h2>
                  <h2>{species}</h2>
                  <h2>{gender}</h2>
                  <h2>{origin}</h2>
               </Link>
            </div>
         </div>
      </div>
   );
}

function mapStateToProp(state) {
   return {
      myFavorites: state.myFavorites
   };
}
function mapDispatchToProp(dispatch) {
   return {
      addFav: (characters) => dispatch(addFav(characters)),
      removeFav: (id) => dispatch(removeFav(id)),

   }
}

export default connect(mapStateToProp, mapDispatchToProp)(Card);