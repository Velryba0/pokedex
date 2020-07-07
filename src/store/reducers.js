import { combineReducers } from 'redux'
import reducerPokemons from './ducks/pokemons' 

export default combineReducers({
    pokemons: reducerPokemons
})