import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { requestPokemosData } from '../../store/ducks/pokemons'

//Components 

import Card from '../../components/card/Card'



const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPokemosData())
    }, [])


    return(
        <>
        <h1>Pokedex</h1>
        <Card/>
        </>
    )
}

export default Home;