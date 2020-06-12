import React, { useState, useEffect } from 'react';
import { useStore } from '../../store';
import { Link } from 'react-router-dom';
import PokemonService from '../../services/PokemonService';

// Components
import Container from '../ui/Container';
import Card from '../ui/Card';
import Row from '../ui/Row';
import Col from '../ui/Col';
import Tag from '../ui/Tag';
import Gap from '../ui/Gap';

const config = require('../../configs/config.json');

function PokemonList() {

  const { state } = useStore();

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

  const pokemonsVisited = (state: any) => {
    if (state && state.pokemons && state.pokemons.length > 0) {
      const quantity = state.pokemons.length;
      const textPokemonViews = quantity > 1 ? 'Pokemons viewed' : 'Pokemon viewed';
      return <>
        <Tag>{quantity} {textPokemonViews}</Tag>
        <Gap />
      </>
      ;
    } else {
      return <>
        <Tag>No Pokemons was viewed</Tag>
        <Gap />
      </>
    }
  }

  return (
    <Container>
      <h1>Pokedux</h1>
      {pokemonsVisited(state)}
      {mountPokemonList(list)}
    </Container>
  )
}

export default PokemonList;