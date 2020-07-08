import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { requestPokemosData } from '../../store/ducks/pokemons'
import { sendSearchPokemonData } from '../../store/ducks/resultPokemon'

//Components 

import Card from '../../components/card/Card'
import SearchBar from '../../components/searchBar/SearchBar'

const Home = () => {

    //Dispatch

    const dispatch = useDispatch();

    //Create selector redux

    const selectorSearchPokemon = createSelector(
        state => state.searchPokemon,
        searchPokemon => searchPokemon
    );

    const selectorPokemonsData = createSelector(
        state => state.pokemons.results,
        pokemonResult => pokemonResult
    );

    const selectorResultPokemon = createSelector(
        state => state.resultPokemon,
        pokemon => pokemon
    );

    const allSelectorSearchPokemon = createSelector(
        selectorSearchPokemon,
        selectorPokemonsData,
        selectorResultPokemon,
        (selectorSearchPokemon, selectorPokemonsData, selectorResultPokemon) => ({
            pokemonData: selectorPokemonsData,
            searchPokemon: selectorSearchPokemon,
            resultPokemon: selectorResultPokemon
        })
    );

    const allPokemonData = useSelector(state => allSelectorSearchPokemon(state));

    if(Object.keys(allPokemonData.searchPokemon).length > 0) {
        const result = allPokemonData.pokemonData.find(pokemon => pokemon.name === allPokemonData.searchPokemon);
        if(result != undefined) {dispatch(sendSearchPokemonData(result))};
    }

    //Lifecycle

    useEffect(() => {
        dispatch(requestPokemosData())
    }, [])

    return(
        <>
        <SearchBar/>
        <Card
        allPokemonData={allPokemonData}/>
        </>
    )
}

export default Home;