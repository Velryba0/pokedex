import React, { useEffect } from 'react';
import { useSelector ,useDispatch } from 'react-redux'

import { requestPokemosData } from '../../store/ducks/pokemons'


const Home = () => {

    const pokemonData = useSelector(state => state);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPokemosData())
    }, [])

    console.log(pokemonData)

    return(
        <>
        <h1>Pokedex</h1>
        </>
    )
}

export default Home;