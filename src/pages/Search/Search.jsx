import React from 'react';
import { useState, useEffect } from 'react';

// Api запрос
import { fetchPokemonByType } from '../../api/pokemonApi';

// Компоненты
import SearchForm from '../../components/SearchForm/SearchForm';

const Search = () => {
  const [pokemons, setPokemons] = useState([]);
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!type) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const data = await fetchPokemonByType(type);
        setPokemons(data);
      } catch (error) {
        console.error('Ошибка при поиске покемонов:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  // Обновляем `type` при отправке формы
  const handleSearch = values => {
    console.log('new type', values.type);
    setPokemons([]);
    setType(values.type);
  };

  console.log(pokemons);

  return (
    <>
      <div>
        <h1>О нас</h1>
        <SearchForm onSearch={handleSearch} />
      </div>
    </>
  );
};

export default Search;
