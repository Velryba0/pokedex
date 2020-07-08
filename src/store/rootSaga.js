import { fork, all } from 'redux-saga/effects'
import { pokemonSaga } from './ducks/pokemons'
import { singlePokemonSaga } from './ducks/singlePokemon'


export default function* rootSaga() {
    yield all([
        fork(pokemonSaga),
        fork(singlePokemonSaga)
    ])
}