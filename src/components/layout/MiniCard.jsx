import './MiniCard.css';
import React from 'react';
import axios from 'axios';


export default function MiniCard(props) {
    
    let pokeImg;
    async function getPokemon(pokedexNumber) {
        try {
            const pokemon = (await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokedexNumber)).data;

            pokeImg = pokemon.sprites.other['official-artwork'].front_default;

            document.querySelector(`.pokemon${pokedexNumber}`).src = pokeImg;

        } catch (error) {
            console.log(error);
        }
    }

    getPokemon(props.pokedexNumber);

    return (
        <div className="MiniCard">
            <img src="" alt="" className={`pokemon${props.pokedexNumber}`}/>
        </div>
    );
};
