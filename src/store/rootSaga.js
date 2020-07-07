import { fork, all } from 'redux-saga/effects'
import { pokemonSaga } from './ducks/pokemons'


export default function* rootSaga() {
    yield all([
        fork(pokemonSaga)
    ])
}