export const fectPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const pokemons = await response.json();
        return pokemons
    } catch (error) {
        console.log("Error al obtener la información")
    }
}