import { useParams } from "react-router-dom";
import styled from "./Detail.module.css"
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {
    const params = useParams()
    // console.log(params);
    const [character, setCharacter] = useState([]);
    console.log(character);

    useEffect(() => {
        const URL_BASE = "https://rickandmortyapi.com/api/character/";
        axios(`${URL_BASE}/${params.detailId}`)
            .then((response) => {
                setCharacter(response.data)
            });
    }, [params.detailId]);

    return (
        <div className={styled.containerDetail}>
            {
                character.name ? (
                    <>
                    <br />
                    <h2>Nombre: {character.name}</h2>
                    <p>Status: {character.status}</p>
                    <p>Specie: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
                    <img src={character.image} alt="img" />
                    <br />
                    </>
                ) : (
                    <h3>Loading......</h3>
                )
            }
        </div>

    )
}
export default Detail;