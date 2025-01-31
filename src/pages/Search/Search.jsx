import React from 'react';
import { useState, useEffect } from 'react';

// Api запрос
import { fetchAllPokemons, fetchPokemonByType } from '../../api/pokemonApi';

// Компоненты
import SearchForm from '../../components/SearchForm/SearchForm';
import PokemonList from '../../components/PokemonList/PokemonList';

const Search = () => {
  const [pokemons, setPokemons] = useState([]);
  const [type, setType] = useState('');
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!type) return;

    const fetchData = async () => {
      // setLoading(true);

      try {
        let data;
        if (type.type === 'all') {
          data = await fetchAllPokemons();
        } else {
          data = await fetchPokemonByType(type);
        }

        setPokemons(data);
      } catch (error) {
        console.error('Ошибка при поиске покемонов:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  const handleSearch = values => {
    setPokemons([]);
    setType(values);
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />

      {pokemons.length === 0 ? (
        <p>Введите тип в строку поиска</p>
      ) : (
        <PokemonList pokemonData={pokemons} />
      )}
    </>
  );
};

export default Search;
