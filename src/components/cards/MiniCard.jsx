import './MiniCard.css';
import React from 'react';
import axios from 'axios';


export default function MiniCard(props) {
    
    async function getPokemon(pokedexNumber) {
        try {
            const pokemon = (await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokedexNumber)).data;

            const pokeImg = pokemon.sprites.other['official-artwork'].front_default;
            const pokeName = pokemon.forms[0].name;

            document.querySelector(`img.pokemon${pokedexNumber}`).src = pokeImg;
            document.querySelector(`p.pokemon${pokedexNumber}`).innerHTML = pokeName;

        } catch (error) {
            console.log(error);
        }
    }

    getPokemon(props.pokedexNumber);

    return (
        <div className="MiniCard">
            <img src="" alt="" className={`pokemon${props.pokedexNumber}`}/>
            <p className={`pokemon${props.pokedexNumber}`}></p>
        </div>
    );
};
