import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();

const initialState = {
  pokemons: []
};

const reducer = (state, action) => {
  switch (action.type) {

    case 'addPokemon':
      
      return {
        ...state,
        pokemons: [...state.pokemons, action.data]
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);