/**********ACTION & ACTION CREATOR***********/

export const RECEIVE_SEARCH_POKEMON_DATA = 'RECEIVE_SEARCH_POKEMON_DATA';

export const receiveSearchPokemonData = (data) => ({ type: RECEIVE_SEARCH_POKEMON_DATA, data});

/**********REDUCER***********/

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_SEARCH_POKEMON_DATA:
            return data;
        default:
            return state;
    }
}