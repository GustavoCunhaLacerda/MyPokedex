import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon';

export default {
    list: function (params) {
        return axios.get(url, {
            params
        });
    },

    get: function(pokedexNumber, params) {
        return axios.get(`${url}/${pokedexNumber}`,{
            params
        });
    }
};