import axios from "axios";
const config = require('../configs/config.json');

export default class PokemonService {

  static getItems() {
    return new Promise((resolve, reject) => {
      axios.get(`${config.api.url}/pokemon`)
        .then(result => resolve(result)).catch(result => reject(result));
    })
  }

}