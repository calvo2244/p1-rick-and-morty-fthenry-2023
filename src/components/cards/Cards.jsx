import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({ characters, onClose }) {
   //console.log(characters);
   //esta funcion ya no se usa ya que se trae porp props 
   // const onClose = () => window.alert("emulamos que se cierra la card");
   return (
      <div className={style.container}>
         {
            characters?.map(({ id, name, status, species, gender, image }) => {
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
            })}
      </div>
   );
}
