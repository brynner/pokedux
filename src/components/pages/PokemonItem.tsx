import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PokemonService from '../../services/PokemonService';
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

  const [pokemonItem, setPokemonItem] = useState([]);

  useEffect(() => {
    getPokemonItem(id);
  }, [id]);

  const getPokemonItem = (id: number) => {

    PokemonService.getPokemonItem(id).then(result => {

      setPokemonItem(result.data);

    }).catch(result => {

      console.log(result);
    });
  }

  const mountPokemonItem = (data: any) => {

    return <Row>
      <Col>
        <Card title={data.name} picture={`${config.cdn.url}/${id}.png`} />
        {!data.stats ? '' :
          <div>
            <h3>Stats</h3>
            <p>HP: {data.stats[0].base_stat}</p>
            <p>Attack: {data.stats[1].base_stat}</p>
            <p>Defense: {data.stats[2].base_stat}</p>
            <p>Speed: {data.stats[5].base_stat}</p>
          </div>
        }
        {!data.abilities ? '' :
          <>
            <h3>Abilities</h3>
            {mountAbilities(data.abilities)}
          </>
        }
      </Col>
    </Row>;
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
        mountPokemonItem(pokemonItem)
      }
    </Container>
  )
}

export default PokemonItem;