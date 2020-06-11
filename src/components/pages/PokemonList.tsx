import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PokemonService from '../../services/PokemonService';
import Container from '../ui/Container';
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
          <Col>
            <Card title={item.name} picture={`${config.cdn.url}/${id}.png`} />
          </Col>
        </Link>
      );
    });

    return <Row>{items}</Row>;
  }

  return (
    <Container>
      <h1>Pokedux</h1>
      {mountPokemonList(list)}
      </Container>
  )
}

export default PokemonList;