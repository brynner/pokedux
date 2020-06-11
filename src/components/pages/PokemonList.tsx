import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PokemonService from '../../services/PokemonService';
import Card from '../ui/Card';
import Row from '../ui/Row';
import Col from '../ui/Col';

const config = require('../../configs/config.json');

function PokemonList() {

  const [list, setList] = useState([]);

  useEffect(() => {
    getPokemonList();
  }, []);

  const getPokemonList = () => {

    PokemonService.getPokemonList().then(result => {

      setList(result.data.results);

    }).catch(result => {

      console.log(result);
    });
  }

  const mountPokemonList = (data: any) => {

    const items = data.map((item: any, index: number) => {

      const id = index + 1;

      return (
        <Link to={`/pokemon/${id}`} key={index}>
          <Col xs={12} sm={6} md={3} lg={4}>
            <Card title={item.name} picture={`${config.cdn.url}/${id}.png`} />
          </Col>
        </Link>
      );
    });

    return <Row>{items}</Row>;
  }

  return (
    <div>
      <h1>Pokedux</h1>
      {mountPokemonList(list)}
    </div>
  )
}

export default PokemonList;