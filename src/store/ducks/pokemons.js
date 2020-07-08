import { all, call, put, takeEvery } from 'redux-saga/effects'
import { fectGruopPokemon } from '../../utils/API'

/**********SAGAS***********/

function* getPokemons() {
    try {
        const pokemons = yield call(fectGruopPokemon);
        yield put(receivePokemonsData(pokemons))
    } catch (error) {
        console.log("No se ha podido obtener la información", error);
    }
}


export function* pokemonSaga() {
    yield all([
        takeEvery(REQUEST_POKEMONS_DATA, getPokemons)
    ])
}

/**********ACTION & ACTION CREATOR***********/

export const REQUEST_POKEMONS_DATA = 'REQUEST_POKEMONS_DATA';
export const RECEIVE_POKEMONS_DATA = 'RECEIVE_POKEMONS_DATA';

export const requestPokemosData = () => ({ type: REQUEST_POKEMONS_DATA});
export const receivePokemonsData = (data) => ({ type: RECEIVE_POKEMONS_DATA, data});

/**********REDUCER***********/

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_POKEMONS_DATA:
            return data;
        default:
            return state;
    }
}