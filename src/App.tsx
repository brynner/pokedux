import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import PokemonList from './components/pages/PokemonList';
import PokemonItem from './components/pages/PokemonItem';

export const routes = {
  home: {
    name: 'Pokedux',
    path: '/'
  },
  pokemon: {
    name: 'Pokemon',
    path: '/pokemon/:id'
  },
};

function App() {
  return (
    <div className="App">

      <Router>
        <Route exact
          path={routes.home.path}
          render={(props) => <PokemonList />}
        />

        <Route exact
          path={routes.pokemon.path}
          render={(props) => <PokemonItem />}
        />
      </Router>

    </div>
  );
}

export default App;
