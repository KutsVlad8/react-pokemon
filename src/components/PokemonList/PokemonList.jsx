import PokemonCard from '../PokemonCard/PokemonCard';
import { List } from './PokemonList.styled';

const PokemonList = ({ pokemonData }) => {
  return (
    <List>
      <PokemonCard pokemons={pokemonData} />
    </List>
  );
};

export default PokemonList;
