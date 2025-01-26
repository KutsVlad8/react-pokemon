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
