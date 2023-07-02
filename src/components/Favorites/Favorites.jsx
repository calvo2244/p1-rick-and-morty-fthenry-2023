import React from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { removeFav } from "../../redux/action.js"

function Favorites({ myFavorites, onClose, removeFav }) {

    function closeFavorites(id) {
        onClose(id)
        removeFav(id)
    }

    return (
        <div>
            <h1>Favorites</h1>
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
    )
}
function mapState(state) {
    return {
        myFavorites: state.myFavorites
    }
}
function mapDispatch(dispatch) {
    return {
        removeFav: (id) => dispatch(removeFav(id))
    }
}
export default connect(mapState, mapDispatch)(Favorites);