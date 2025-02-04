// Базовые импорты
import React from 'react';
import { useEffect, useState } from 'react';

// Запрос API
import { fetchRandomPokemons } from '../../api/pokemonApi';

// Компоненты
import MainTitle from '../../components/MainTitle/MainTitle';
// import Title from '../../components/Title/Title';
import PokemonList from '../../components/PokemonList/PokemonList';

// Стили
import { Text } from './Home.styled';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getRandomPokemons = async () => {
      try {
        const data = await fetchRandomPokemons();
        setPokemons(data);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    };

    getRandomPokemons();
  }, []);

  console.log(pokemons);

  return (
    <>
      <MainTitle text="Dive into the world of amazing creatures" />

      <Text>
        Pokémon are fantastic creatures that inhabit a world full of magic and
        wonder. The journeys of Pokémon are full of amazing encounters and
        exciting events. Together with their trainers, they fight, evolve, and
        teach us important life lessons, such as friendship, courage,
        responsibility, honesty, and love for nature. They can be of different
        types: fire, water, ice, and many others! Many Pokémon can evolve and
        become even stronger!
      </Text>
      {/* <Title text="Спіймай їх усіх!" /> */}

      <PokemonList pokemonData={pokemons} />
    </>
  );
};

export default Home;
