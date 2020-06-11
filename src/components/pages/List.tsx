import React, { useState, useEffect } from 'react';
import PokemonService from '../../services/PokemonService';
import Card from '../ui/Card';
import Row from '../ui/Row';
import Col from '../ui/Col';

const config = require('../../configs/config.json');

const List = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    getPokemonList();
  }, []);

  const getPokemonList = () => {

    PokemonService.getItems().then(result => {

      setList(result.data.results);

    }).catch(result => {

      console.log(result);
    });
  }

  const mountList = (data: any) => {
    
    const items = data.map((item: any, index: number) => {
      return (
        <div key={index}>
          <Col xs={12} sm={6} md={3} lg={4}>
            <Card title={item.name} picture={`${config.cdn.url}/${index+1}.png`} />
          </Col>
        </div>
      );
    });

    return <Row>{items}</Row>;
  }

  return (
    <div>
      <h1>Pokedux</h1>
      {mountList(list)}
    </div>
  )
}

export default List;