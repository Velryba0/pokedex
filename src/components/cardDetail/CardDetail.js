import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { requestSinglePokemonData } from '../../store/ducks/singlePokemon'

//Material UI

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

//SASS

import './cardDetail.style.scss'
  

const CardDetail = ({ open, setOpen, pokemonName, indexPokemon }) => {

    //Dispatch

    const dispatch = useDispatch();

    //Create Selector Redux

    const selectHeightPokemon = createSelector(
        state => state.pokemon.height,
        height => height
    );

    const selectWeightPokemon = createSelector(
        state => state.pokemon.weight,
        weight => weight
    );

    const selectTypesPokemon = createSelector(
        state => state.pokemon.types,
        types => types
    );

    const selectAbilitiesPokemon = createSelector(
        state => state.pokemon.abilities,
        abilities => abilities
    );

    const allSelectorPokemon = createSelector(
        selectHeightPokemon,
        selectWeightPokemon,
        selectTypesPokemon,
        selectAbilitiesPokemon,
        (selectHeightPokemon, selectWeightPokemon, selectTypesPokemon, selectAbilitiesPokemon) => (
            {
                height: selectHeightPokemon,
                weight: selectWeightPokemon,
                types: selectTypesPokemon,
                abilities: selectAbilitiesPokemon
            }
        )
    );

    const pokemonDetail = useSelector(state => allSelectorPokemon(state));

    //Handler

    const handleClose = () => {
        setOpen(false);
    };

    //Lifecycle

    useEffect(() => {
        if(indexPokemon === 0) return
        if(!open) return    
        dispatch(requestSinglePokemonData(indexPokemon))
    }, [indexPokemon])
 
    return(
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle >
                    <Typography>
                        {pokemonName}
                    </Typography>
                    <IconButton aria-label="close" onClick={handleClose} >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent >
                <div className="row">
                    <img src={`${process.env.PUBLIC_URL}/sprites/${indexPokemon}.png`}/>
                    <div className="column">
                        <div className="row">
                            <div className="column">
                                <Typography>
                                    Altura
                                </Typography>
                                <Typography>
                                    {`${pokemonDetail.height} ft`}
                                </Typography>
                            </div>
                            <div className="column">
                                <Typography>
                                    Peso
                                </Typography>
                                <Typography>
                                    {`${pokemonDetail.weight} lb`}
                                </Typography>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <Typography>
                                    Tipo
                                </Typography>
                                <Typography>
                                    {`${pokemonDetail.types ? pokemonDetail.types.length : 0}`}
                                </Typography>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <Typography>
                                    Habilidades
                                </Typography>
                                <Typography>
                                    {`${pokemonDetail.abilities ? pokemonDetail.abilities.length : 0}`}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CardDetail;