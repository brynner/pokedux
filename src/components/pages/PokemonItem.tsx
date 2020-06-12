import React, { useEffect, useCallback } from 'react';
import { useStore } from '../../store';
import { useParams, useHistory } from 'react-router-dom';
import PokemonService from '../../services/PokemonService';

// Components
import Container from '../ui/Container';
import Card from '../ui/Card';
import Row from '../ui/Row';
import Col from '../ui/Col';
import Tag from '../ui/Tag';
import Button from '../ui/Button';

const config = require('../../configs/config.json');

function PokemonItem() {

  const { id } = useParams();
  const history = useHistory();

  // State
  const { state, dispatch } = useStore();

  // Verify if item already was added into Context
  const indexPokemonItem = state.pokemons.findIndex((item: any) => item.id === id);
  
  const initialFetch = useCallback(() => {
    // Pokemon is not into Context, so add it
    if (indexPokemonItem < 0) {

      // Add new item to current state
      PokemonService.getPokemonItem(id).then(result => {

        const pokemonData = {
          id: id,
          name: result.data.name,
          stats: {
            hp: result.data.stats[0].base_stat,
            attack: result.data.stats[1].base_stat,
            defense: result.data.stats[2].base_stat,
            speed: result.data.stats[5].base_stat
          },
          abilities: result.data.abilities
        }

        // Store
        dispatch({ type: 'addPokemon', data: pokemonData })

      }).catch(result => {
        console.log(result);
      });

    }
  }, [id, indexPokemonItem, dispatch]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  const mountPokemonItem = (data: any) => {

    if (indexPokemonItem >= 0) {
      // Pokemon found
      const pokemonStore = data.pokemons[indexPokemonItem];

      return <Row>
        <Col>
          <Card title={pokemonStore.name} picture={`${config.cdn.url}/${id}.png`} />
          {!pokemonStore.stats ? '' :
            <div>
              <h3>Stats</h3>
              <p>HP: {pokemonStore.stats.hp}</p>
              <p>Attack: {pokemonStore.stats.attack}</p>
              <p>Defense: {pokemonStore.stats.defense}</p>
              <p>Speed: {pokemonStore.stats.speed}</p>
            </div>
          }
          {!pokemonStore.abilities ? '' :
            <>
              <h3>Abilities</h3>
              {mountAbilities(pokemonStore.abilities)}
            </>
          }
        </Col>
      </Row>;
    }
  }

  const mountAbilities = (data: any) => {

    const items = data.map((item: any, index: number) => {
      return (
        <Tag key={index}>{item.ability.name}</Tag>
      );
    });

    return <div>{items}</div>;
  }

  return (
    <Container>
      <h1>Pokedux</h1>
      <Button onClick={() => history.push('/')}>Back to Home</Button>
      {
        mountPokemonItem(state)
      }
    </Container>
  )
}

export default PokemonItem;