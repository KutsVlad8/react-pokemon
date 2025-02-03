import React from 'react';
import { useState, useEffect } from 'react';

// Api запрос
import { fetchAllPokemons, fetchPokemonByType } from '../../api/pokemonApi';

// Компоненты
import SearchForm from '../../components/SearchForm/SearchForm';
import PokemonList from '../../components/PokemonList/PokemonList';

// Лоадер
import { quantum } from 'ldrs';

import { ResultsWrapper, Text, ButtonWrapper, Button } from './Search.styled';

const Search = () => {
  const [pokemons, setPokemons] = useState([]);
  const [type, setType] = useState('');
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 20;

  console.log(offset);

  quantum.register('list-loader');

  useEffect(() => {
    if (!type) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        let data;
        if (type.type === 'all') {
          data = await fetchAllPokemons(limit, offset);
        } else {
          data = await fetchPokemonByType(type, limit, offset);
        }
        setPokemons(prev => [...prev, ...data]);
      } catch (error) {
        console.error('Ошибка при поиске покемонов:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, offset]);

  const handleSearch = values => {
    setType(values);
    setPokemons([]);
    setOffset(0);
  };

  const loadMore = () => {
    setOffset(prevOffset => prevOffset + limit);
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <ResultsWrapper>
        {pokemons.length === 0 ? (
          <Text>Введите тип в строку поиска</Text>
        ) : (
          <PokemonList pokemonData={pokemons} />
        )}
      </ResultsWrapper>
      <ButtonWrapper>
        {loading ? (
          <list-loader size="130" speed="1.8" color="#fbca06" />
        ) : (
          pokemons.length > 0 && <Button onClick={loadMore}>Load More</Button>
        )}
      </ButtonWrapper>
    </>
  );
};

export default Search;
