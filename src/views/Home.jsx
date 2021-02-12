import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../api';

import MiniCard from '../components/cards/MiniCard';
import Title from '../components/layout/Title';
import Pokeball from '../components/loader/Pokeball';

export default function Home(props) {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonIndex, setPokemonIndex] = useState(1);
    const [steps, setSteps] = useState(151);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        async function getPokemons() {
            try {
                for (let i = pokemonIndex; i < pokemonIndex + steps; i++) {
                    pokemons.push((await api.pokemon.get(i)).data);
                }
                setPokemons([...pokemons]);

            } catch (error) {
                console.log(error);
            } finally {
                setReady(true);
            }
        }
        getPokemons();

    }, []);

    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        cursor: 'default'
    };


    const flexCards = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginLeft: '50px',
        marginRight: '50px'
    };

    function pokemonsList() {
        return pokemons.map((pokemon, i) => {
            return (
                <Link to={`/pokemon/${i + 1}`} key={i + 1} style={linkStyle}>
                    <MiniCard pokemon={pokemon} pokedexNumber={i + 1} key={i + 1}>
                    </MiniCard>
                </Link>
            );
        });
    }
    return (
        <div className="Home" style={flexCards}>
            {ready ? 
                <Title></Title> : <></>
            }
            <div className="cards-list" style={flexCards}>
                {ready ?
                    pokemonsList()
                    : (<Pokeball />)
                }
            </div>
        </div>
    );
};
