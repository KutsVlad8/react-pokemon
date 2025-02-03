import axios from 'axios';

// Создаем экземпляр axios для базового URL
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

// Запрос случайных покемонов
export const fetchRandomPokemons = async (count = 8) => {
  try {
    const responses = await Promise.all(
      Array.from({ length: count }).map(() =>
        api.get(`pokemon/${Math.floor(Math.random() * 1000) + 1}`)
      )
    );
    const data = responses.map(res => res.data);

    console.log('покемоны по типу', data);
    return data;
  } catch (error) {
    throw new Error('Error fetching random pokemons: ' + error.message);
  }
};

// Запрос покемона по имени
export const fetchPokemonByName = async name => {
  try {
    const response = await api.get(`pokemon/${name.toLowerCase()}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching pokemon by name: ' + error.message);
  }
};

// Запрос всех покемонов

export const fetchAllPokemons = async (limit, offset) => {
  try {
    // получаем всех покемонов
    const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);

    // получаем  массив  ссылок на покемонов
    const pokemonsUrl = response.data.results.map(p => p.url);

    // делаем запрос по  массиву  ссылок

    const responsPokemons = await Promise.all(
      pokemonsUrl.map(url => api.get(url))
    );

    // перебираем массив покемонов для рендера

    const pokemonData = responsPokemons.map(pokemon => pokemon.data);

    return pokemonData;
  } catch (error) {
    throw new Error('Error fetching pokemon by name: ' + error.message);
  }
};

// Запрос покемона по типу
export const fetchPokemonByType = async ({ type }, limit, offset) => {
  try {
    // получаем ссылку покемонов
    const response = await api.get(`type/${type}`);

    // перебираем массив ссылок для запроса

    const pokemonsUrl = response.data.pokemon.map(p => p.pokemon.url);

    // получаем массив покемонов по ссылкам

    const responsPokemons = await Promise.all(
      pokemonsUrl.map(url => api.get(url))
    );

    // перебираем массив покемонов и пагинацию покемонов

    const pokemonData = responsPokemons
      .map(pokemon => pokemon.data)
      .slice(offset, offset + limit);

    return pokemonData;
  } catch (error) {
    throw new Error('Error fetching pokemon by type: ' + error.message);
  }
};
