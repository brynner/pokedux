import axios from "axios";
const config = require('../configs/config.json');

/**
 * Get Pokemon List
 */
const getPokemonList = () =>
  axios.get(`${config.api.url}/pokemon`)
    .then(result => resolve(result))
    .catch(result => result.response)

test('Fetch successfully Pokemon List from API', () => {
  return getPokemonList().then(response => {
    expect(response).toEqual();
  });
});

/**
 * Get Pokemon ID 1
 */
const getPokemonItem = (id) =>
  axios.get(`${config.api.url}/pokemon/${id}`)
    .then(result => resolve(result))
    .catch(result => result.response)

test('Fetch successfully Pokemon ID 1 from API', () => {
  return getPokemonItem(1).then(response => {
    expect(response).toEqual();
  });
});