import axios from "axios";
const config = require('../configs/config.json');

export default class PokemonService {

  static async getPokemonList() {
    return await new Promise((resolve, reject) => {
      axios.get(`${config.api.url}/pokemon`)
        .then(result => resolve(result)).catch(result => reject(result));
    })
  }

  static async getPokemonItem(id) {
    return await new Promise((resolve, reject) => {
      axios.get(`${config.api.url}/pokemon/${id}`)
        .then(result => resolve(result)).catch(result => reject(result));
    })
  }

}