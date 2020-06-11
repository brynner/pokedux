import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import PokemonService from '../../services/PokemonService';
import Card from '../ui/Card';
import Row from '../ui/Row';
import Col from '../ui/Col';

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
      <Col xs={12} sm={6} md={3} lg={4}>
        <Card title={data.name} picture={`${config.cdn.url}/${id}.png`} />
        {!data.stats ? '' :
        <div>
          <p>HP: {data.stats[0].base_stat}</p>
          <p>Attack: {data.stats[1].base_stat}</p>
          <p>Defense: {data.stats[2].base_stat}</p>
          <p>Speed: {data.stats[5].base_stat}</p>
        </div>
        }
      </Col>
    </Row>;
  }

  return (
    <div>
      <h1>Pokedux</h1>
      {
        mountPokemonItem(pokemonItem)
      }
      <br />
      <button onClick={() => history.push('/')}>Back to Home</button>
    </div>
  )
}

export default PokemonItem;