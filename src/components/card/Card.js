import React, { useState } from 'react'

//Material UI

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Component

import CardDetail from '../cardDetail/CardDetail'

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


const CardPokemon = ({ allPokemonData }) => {
    
    //State React

    const [open, setOpen] = useState(false);
    const [pokemonName, setPokemonName] = useState("");
    const [indexPokemon, setIndexPokeon] = useState(0);

    //Styles Material UI

    const classes = useStyles();

    //Variables

    let regex = /\/pokemon\/(0*[1-9][0-9]*)/;


    //Manage Component

    const PokemonCard = () => (
        allPokemonData.pokemonData ? allPokemonData.pokemonData.map((pokemon, idx) => {
  
        let resRegex = pokemon.url.match(regex)

            return   <Card key={idx} className={classes.root} onClick={() => {
                        setOpen(true);
                        setIndexPokeon(resRegex[1]);
                        setPokemonName(pokemon.name)
                    }}>
                        <CardActionArea >
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
    );

    const ResultPokemonCard = () => {

        let resRegex = Object.keys(allPokemonData.resultPokemon).length > 0 ? allPokemonData.resultPokemon.url.match(regex) : 1;
        
        return   <Card className={classes.root} onClick={() => {
                    setOpen(true);
                    setIndexPokeon(resRegex[1]);
                    setPokemonName(allPokemonData.resultPokemon.name)
                }}>
                    <CardActionArea >
                        <CardMedia
                        className={classes.media}
                        image={`${process.env.PUBLIC_URL}/sprites/${resRegex[1]}.png`}
                        title={allPokemonData.resultPokemon.name}
                        />
                        <CardContent className="card-pokemon-content">
                        <Typography gutterBottom variant="h5" component="h2">
                            {allPokemonData.resultPokemon.name}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
    };

    return (
        <>
        <div className="card-pokemon-container">
            {Object.keys(allPokemonData.resultPokemon).length > 0 && Object.keys(allPokemonData.searchPokemon).length > 0 ? <ResultPokemonCard/> : <PokemonCard/>}
        </div>
        <CardDetail 
        open={open}
        setOpen={setOpen}
        pokemonName={pokemonName}
        indexPokemon={indexPokemon}/>
        </>
    )
}

export default CardPokemon;