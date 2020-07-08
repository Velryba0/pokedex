import { combineReducers } from 'redux'
import reducerPokemons from './ducks/pokemons' 
import reducerSinglePokemon from './ducks/singlePokemon'
import reducerSearchPokemon from './ducks/searchPokemon'
import reducerResultPokemon from './ducks/resultPokemon'

export default combineReducers({
    pokemons: reducerPokemons,
    pokemon: reducerSinglePokemon,
    searchPokemon: reducerSearchPokemon,
    resultPokemon: reducerResultPokemon
})