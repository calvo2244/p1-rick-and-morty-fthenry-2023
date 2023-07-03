import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actionTypes";

const initialState = {
    data: [],
    myFavorites: [],
    allCharacters: [] //solo lo cambia el add y el remove
}
 
export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]

            };
        case REMOVE_FAV:
            const newFavorites = state.allCharacters.filter((characters) => characters.id !== payload);
            return {
                ...state,
                myFavorites: newFavorites,
                allCharacters: newFavorites,
            };
        case FILTER:
            const newFilter = state.allCharacters.filter((characters) => characters.gender === payload);
            return {
                ...state,
                myFavorites: newFilter,
            };
        case ORDER:
            const newOrder = state.allCharacters.sort((a, b) => {
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
                myFavorites: [...state.allCharacters],
            };
        default:
            return state;
    }
}