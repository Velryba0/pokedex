export const fectGruopPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const pokemons = await response.json();
        return pokemons
    } catch (error) {
        console.log("Error al obtener la información")
    }
}

export const fetchPokemon = async ({ id }) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = response.json()
        return pokemonData
    } catch (error) {
        
    }
}