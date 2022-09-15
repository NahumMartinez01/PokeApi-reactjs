//con este componente realizamos las llamadas a la api

const url = 'https://pokeapi.co/api/v2';
const consulta = {
     pokemon: 'pokemon'
  }
///sirve para llamar al pokemon especifico
export async function fetchPokemon(pokemon) {
   return fetch(`${url}/${consulta.pokemon}/${pokemon}`)
}

///para paginar los pokemones que llamaremos en las cards antes de realizar la busqueda
export async function fetchAllPokemon(limit = 21 , offset = 0){
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
      console.log(error)
  }
}
//para realizar un fetch al url que le pasaramos para pokemones y también la iba a usar para los tipos
export async function fetchNormal(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err)
  }
}