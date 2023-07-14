import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET, ADD_CHAR, RESET_CHAR, REMOVE_CHAR, NEXT_PAGE, BACK_PAGE } from "./actionTypes";

const initialState = {
    charactersOrigin: [], // todos los characters
    characters: [], // todos los characters
    //TODO: para agregar o remover trabajamos en ambos (myFavorites, allFavorites)
    myFavorites: [], // original de myFavorites
    //TODO: para filtrar trabajamos solo acá
    allFavorites: [], //solo lo cambia el add y el remove
    numPage: 1,
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allFavorites, payload],
                allFavorites: [...state.allFavorites, payload]

            };
        case REMOVE_FAV:
            const newFavorites = state.allFavorites.filter((characters) => characters.id !== payload);
            return {
                ...state,
                myFavorites: newFavorites,
                allFavorites: newFavorites,
            };
        case FILTER:
            const newFilter = state.allFavorites.filter((characters) => characters.gender === payload);
            return {
                ...state,
                myFavorites: newFilter,
            };
        case ORDER:
            const newOrder = state.allFavorites.sort((a, b) => {
                if (a.id > b.id) {
                    return "Ascendente" === payload ? 1 : -1
                }
                if (a.id < b.id) {
                    return "Descendente" === payload ? 1 : -1
                }
                return 0;
            });
            return {
                ...state,
                myFavorites: newOrder,
            };
        case RESET:
            return {
                ...state,
                myFavorites: [...state.allFavorites],
            };
        case ADD_CHAR:
            if (Array.isArray(payload)) { //si es array lo que pasa
                return {
                    ...state,
                    charactersOrigin: [...state.characters, ...payload],
                    characters: [...state.characters, ...payload],
                };
            }

            return {
                ...state,
                characters: [payload, ...state.characters],
            };
        case RESET_CHAR:
            return {
                ...state,
                characters: [...state.charactersOrigin],
            };

        case REMOVE_CHAR:
            const newCharacters = state.characters.filter((ch) => {
                return ch.id !== payload;
            });
            return {
                ...state,
                characters: newCharacters,
            };
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1,
            };
        case BACK_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1,
            };
        default:
            return state;
    }
}