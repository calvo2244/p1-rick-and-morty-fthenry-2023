import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './Cards.module.css'
import Paginate from '../Paginate/Paginate.jsx';

export default function Cards({ onClose }) {
   //console.log(characters);
   //esta funcion ya no se usa ya que se trae porp props 
   // const onClose = () => window.alert("emulamos que se cierra la card");
   const { characters } = useSelector(state => state);
   const { numPage } = useSelector(state => state);

   let desde = (numPage - 1) * 6;
   let hasta = numPage * 6;
   let cantPages = Math.floor(characters.length / 6)

   //slice realiza el corte 
   const viewCharacters = characters.slice(desde, hasta)
   return (
      // console.log("------> ",viewCharacters),
      <div>
         <Paginate cantPages={cantPages}></Paginate>
         <div className={style.cards}>
            {
               viewCharacters?.map(({ id, name, status, species, gender, image }) => {
                  return (
                     <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        //origin={origin}
                        image={image}
                        onClose={onClose}
                     />
                  );
               })
            }
         </div>
      </div>
   );
}
