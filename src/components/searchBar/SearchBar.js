import React, { useState } from 'react'

//Redux
import { useDispatch } from 'react-redux'
import { receiveSearchPokemonData } from '../../store/ducks/searchPokemon'

//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

const useStyles  = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, -5),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 180,
          '&:focus': {
            width: 220,
          },
          '&::placeholder': {
              color: 'black'
          }
        },
      },
}))

const SearchBar = () => {
    const classes = useStyles();

    //State React

    const [inputValue, setInputValue] = useState("")

    //Dispatch

    const dispatch = useDispatch();

    //Handlers

    const searchInputPokemon = (e) => {
        setInputValue(e.target.value)
    }

    const resultSearch = () => {
        dispatch(receiveSearchPokemonData(inputValue))
    }

    // console.log(selectorSearch)

    return (
        <div className={classes.root} >
            <AppBar position="static" theme={classes.root} style={{
              background: 'linear-gradient(15deg, #F61111 10%, #0E83D3 90%)',
              marginBottom: "30px"
              }}>
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    Pokedex
                </Typography>
                <div className={classes.search}>
                <IconButton type='submit' 
                onClick={resultSearch}
            >
              <SearchIcon/>
            </IconButton>
            <InputBase
              placeholder="Busca tu pokemon..."
              onChange={searchInputPokemon}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
                />
                </div>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default SearchBar;