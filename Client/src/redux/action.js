import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET, ADD_CHAR,RESET_CHAR, REMOVE_CHAR, NEXT_PAGE, BACK_PAGE } from "./actionTypes";

export function addFav(character) {
    return {
        type: ADD_FAV,
        payload: character,
    };

}
export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id,
    };

}

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender,
    };

}

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order,
    };

}
export function reset() {
    return {
        type: RESET,
    };

}

export function addChar(char) {
    return {
        type: ADD_CHAR,
        payload: char,
    };
}
export function resetchar(char) {
    return {
        type: RESET_CHAR,
        payload: char,
    };
}

export function removeChar(id) {
    return {
        type: REMOVE_CHAR,
        payload: id,
    };
}

export function nextpage() {
    return {
        type: NEXT_PAGE,
    };
}
export function backpage() {
    return {
        type: BACK_PAGE,
    };
}


/*
 EJERCICIO 2 | Reducer
Dirígete al archivo reducer y sigue estos pasos:

En tu estado inicial crea una nueva propiedad llamada allCharacters que debe ser igual a un arreglo vacío.

Modificaremos el caso ADD_FAV de la siguiente manera:

Dentro de la copia de tu estado global, reemplaza la propiedad myFavorites por allCharacters.
Cuando retornes tu estado, agrega la propiedad allCharacters que también sea igual a la copia en la que agregaste el nuevo personaje.

Crea un nuevo caso con el nombre "FILTER". Aquí debes crear una copia de tu estado global allCharacters. A partir de esta copia filtra todos aquellos personajes que tengan el mismo género que recibes por payload. Finalmente retorna una copia de tu estado, pero que la propiedad myFavorites sea igual a este filtrado.

Crea un nuevo caso con el nombre "ORDER". Aquí vamos a ordenar nuestros personajes favoritos de forma ascendente y descendente. Para esto:

Crea una copia de tu estado global allCharacters.
Utiliza el método sort para ordenar tus personajes de acuerdo a su id.
Si el payload es igual a "A", los personajes deben ordenarse de menor a mayor.
Si el payload es igual a "D, los personajes deben ordenarse de mayor a menor.
Finalmente retorna tu estado global y en la propiedad myFavorites guarda el ordenamiento que hiciste.
[NOTA]: investiga en la web cómo funciona el método sort.

 EJERCICIO 1 | Actions 

Dirígete al archivo actions y crea las siguientes funciones:

filterCards: esta función recibe por parámetro un gender. Debe retornar una action con el type 
igual a "FILTER" y el payload será igual al parámetro recibido.

orderCards: esta función recibe por parámetro un orden (será: A: ascendente o D: descendente). 
Debe retornar una action con el type igual a "ORDER" y el payload será igual al parámetro recibido.
*/