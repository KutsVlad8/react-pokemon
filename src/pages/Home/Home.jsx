// Базовые импорты
import React from 'react';
import { useEffect, useState } from 'react';

// Запрос API
import { fetchRandomPokemons } from '../../api/pokemonApi';

// Компоненты
import MainTitle from '../../components/MainTitle/MainTitle';
import Title from '../../components/Title/Title';
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
      <MainTitle text="Поринь у світ дивовижних створінь " />

      <Text>
        Покемоны — это фантастические существа, которые обитают в мире, полном
        магии и волшебства.Путешествия покемонов полны удивительных встреч и
        волнующих событий. Вместе с тренерами они сражаются, развиваются, и учат
        нас важным жизненным урокам,таким как дружба, смелость,
        ответственность,честность и любовь к природе. Они могут быть разных
        типов: огненные, водные, ледяные и многие другие! Многие покемоны могут
        эволюционировать и становиться ещё сильнее!
      </Text>
      <Title text="Спіймай їх усіх!" />

      <PokemonList pokemonData={pokemons} />
    </>
  );
};

export default Home;
