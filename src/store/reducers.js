import { combineReducers } from 'redux'
import reducerPokemons from './ducks/pokemons' 
import reducerSinglePokemon from './ducks/singlePokemon'

export default combineReducers({
    pokemons: reducerPokemons,
    pokemon: reducerSinglePokemon
})