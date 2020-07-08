import { all, call, put, takeEvery } from 'redux-saga/effects'
import { fetchPokemon } from '../../utils/API'

/**********SAGAS***********/

function* getSinglePokemon(arg) {
    try {
        const pokemon = yield call(fetchPokemon, arg);
        yield put(receiveSinglePokemonData(pokemon))
    } catch (error) {
        console.log("No se ha podido obtener la información", error);
    }
}


export function* singlePokemonSaga() {
    yield all([
        takeEvery(REQUEST_SINGLE_POKEMON_DATA, getSinglePokemon)
    ])
}

/**********ACTION & ACTION CREATOR***********/

export const REQUEST_SINGLE_POKEMON_DATA = 'REQUEST_SINGLE_POKEMON_DATA';
export const RECEIVE_SINGLE_POKEMON_DATA = 'RECEIVE_SINGLE_POKEMON_DATA';

export const requestSinglePokemonData = (id) => ({ type: REQUEST_SINGLE_POKEMON_DATA, id});
export const receiveSinglePokemonData = (data) => ({ type: RECEIVE_SINGLE_POKEMON_DATA, data});

/**********REDUCER***********/

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_SINGLE_POKEMON_DATA:
            return data;
        default:
            return state;
    }
}