/**********ACTION & ACTION CREATOR***********/

export const SEND_SEARCH_POKEMON_DARA = "SEND_SEARCH_POKEMON_DARA";

export const sendSearchPokemonData = (data) => ({type: SEND_SEARCH_POKEMON_DARA, data});

/**********REDUCER***********/

export default (state = {}, { type, data }) => {
    switch (type) {
        case SEND_SEARCH_POKEMON_DARA:
            return data;
        default:
            return state;
    }
}