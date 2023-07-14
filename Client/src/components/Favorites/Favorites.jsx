import React from "react";
import Style from "./Favorites.module.css"
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { orderCards, removeFav, filterCards, reset } from "../../redux/action.js"

function Favorites({ onClose }) {
    const { myFavorites } = useSelector((state) => state)
    const dispatch = useDispatch()

    function closeFavorites(id) {
        onClose(id)
        dispatch(removeFav(id))
    }

    function handleOrder(evento) {
        evento.preventDefault()
        const { value } = evento.target
        dispatch(orderCards(value))
    }
    function handleFilter(evento) {
        evento.preventDefault()
        const { value } = evento.target
        dispatch(filterCards(value))
    }

    function resetButton() {
        dispatch(reset())
    }

    return (
        <div>
            <div className={Style.btnFilters}>
                <select name="order" defaultValue={"DEFAULT"} onChange={handleOrder}>
                    <option value="DEFAULT" disable>Select Order</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>

                <select name="filter" defaultValue={"DEFAULT"} onChange={handleFilter}>
                    <option value="DEFAULT" disable>Select Filter</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="GenderLess">GenderLess</option>
                    <option value="Unknown">Unknown</option>
                </select>

                <button onClick={resetButton}>Resets</button>

            </div>

            <h1 style={{color: "white"}}>Favorites</h1>

            <div className={Style.cards}>
                {
                    myFavorites?.map(({ id, name, status, species, gender, image }) => {
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
                                onClose={() => closeFavorites(id)}
                            />
                        );
                    })}
            </div>
        </div>
    )
}
// function mapState(state) {
//     return {
//         myFavorites: state.myFavorites
//     }
// }
// function mapDispatch(dispatch) {
//     return {
//         removeFav: (id) => dispatch(removeFav(id))
//     }
// }

// export default connect(mapState, mapDispatch)(Favorites);
export default Favorites;