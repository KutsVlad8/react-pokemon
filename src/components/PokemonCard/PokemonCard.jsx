import {
  Card,
  Image,
  Content,
  Title,
  Type,
  Abilities,
  Stats,
  StatsList,
  StatsListItem,
  Span,
} from './PokemonCard.styled';

import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

const PokemonCard = ({ pokemons }) => {
  return (
    <>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id}>
          <Title>{capitalizeFirstLetter(pokemon.name)}</Title>
          <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
          <Content>
            <Type>
              Type:
              <Span>
                {capitalizeFirstLetter(
                  pokemon.types[0]?.type.name || 'Unknown'
                )}
              </Span>
            </Type>
            <Abilities>
              Abilities:
              <Span>
                {capitalizeFirstLetter(
                  pokemon.abilities[0]?.ability.name || 'Unknown'
                )}
              </Span>
            </Abilities>
            {/* <Stats>Stats:</Stats> */}
            <StatsList>
              {pokemon.stats.map(stat => (
                <StatsListItem key={stat.stat.name}>
                  {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
                </StatsListItem>
              ))}
            </StatsList>
          </Content>
        </Card>
      ))}
    </>
  );
};

export default PokemonCard;
