(() => {
  const limit = 2000;
  let finalScore = 0;

  async function getPokemons(offset = 0) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=${offset}`, {
      method: 'GET'
    });

    const pokemons = await response.jsonParse();
    return pokemons
  }
  await getPokemon();
})
