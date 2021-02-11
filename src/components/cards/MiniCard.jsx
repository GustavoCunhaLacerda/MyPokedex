import './MiniCard.css';
import React from 'react';
import axios from 'axios';


export default function MiniCard({ pokemon, pokedexNumber }) {

    const pokeImg = pokemon.sprites.other['official-artwork'].front_default;
    const pokeName = pokemon.forms[0].name;
    console.log(pokeImg);

    return (
        <div className="MiniCard">
            <img src={pokeImg} alt="" className={`pokemon${pokedexNumber}`} />
            <p className={`pokemon${pokedexNumber}`}>{pokeName}</p>
        </div>
    );
};
