import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

//Material UI

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Sass

import './card.style.scss'


const useStyles = makeStyles({
    root: {
      width: 221,
    },
    media: {
      height: 160,
    },
  });


const CardPokemon = () => {

    //Styles Material UI

    const classes = useStyles();

    //Create Selector Redux

    const selectPokemon = createSelector(
        state => state.pokemons.results,
        state => state
    )

    const pokemonData = useSelector(state => selectPokemon(state));

    let regex = /\/pokemon\/(0*[1-9][0-9]*)/

    //Manage Component

    const PokemonCard = () => (
        pokemonData ? pokemonData.map((pokemon, idx) => {
  
        let resRegex = pokemon.url.match(regex)

            return   <Card key={idx} className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={`${process.env.PUBLIC_URL}/sprites/${resRegex[1]}.png`}
                            title={pokemon.name}
                            />
                            <CardContent className="card-pokemon-content">
                            <Typography gutterBottom variant="h5" component="h2">
                                {pokemon.name}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
        }) : "Loading..."
    )




    return (
        <div className="card-pokemon-container">
            <PokemonCard/>
        </div>
    )
}

export default CardPokemon;