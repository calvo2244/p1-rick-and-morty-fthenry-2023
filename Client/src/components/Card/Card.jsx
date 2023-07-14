import style from "./Card.module.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/action";

import { useEffect, useState } from "react";

export default function Card(props) {

   const { id, name, status, species, gender, origin, image, onClose } = props

   //! hook

   const dispatch = useDispatch()
   const [isFav, setItsFav] = useState(false)
   const {myFavorites} = useSelector((s) => s)


   function handleFavorite() {
      if (isFav) {
         setItsFav(false)
         dispatch(removeFav(id))
      } else {
         setItsFav(true);
         dispatch(addFav(props));
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setItsFav(true);
         }
      });

   }, [myFavorites,props.id]);

   function superClouse() {
      onClose(id)
      dispatch(removeFav(id))
   }

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
                     <button className={style.btnFav} onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button className={style.btnFav} onClick={handleFavorite}>🤍</button>
                  )
               }
               <button
                  className={style.btnClose}
                  onClick={superClouse}> X
               </button>

               <Link to={`/detail/${id}`}>
                  <h2>{id}</h2>
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

// function mapStateToProp(state) {
//    return {
//       myFavorites: state.myFavorites
//    };
// }
// function mapDispatchToProp(dispatch) {
//    return {
//       addFav: (characters) => dispatch(addFav(characters)),
//       removeFav: (id) => dispatch(removeFav(id)),

//    }
// }

// export default connect(mapStateToProp, mapDispatchToProp)(Card);
