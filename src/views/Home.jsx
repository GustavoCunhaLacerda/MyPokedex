import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../api';

import MiniCard from '../components/cards/MiniCard';
import Title from '../components/layout/Title';

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
                setPokemonIndex(pokemonIndex + steps);

            } catch (error) {
                console.log(error);
            } finally {
                setReady(true);
            }
        }
        getPokemons();

    }, []);

    
    function pokemonsList() {
        return pokemons.map((pokemon, i) => {
            return (
                <Link to={`/single-card/${i + 1}`} key={i + 1} style={{ textDecoration: 'none', color: '#333', cursor: 'default' }}>
                    <MiniCard pokemon={pokemon} pokedexNumber={i + 1} key={i + 1}>
                    </MiniCard>
                </Link>
            );
        });
    }
    
    const flexCards = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    };

    return (
        <div className="Home" style={flexCards}>
            <Title></Title>
            {ready ? pokemonsList() : (<div>
                {/* TODO LOADER */}
            </div>)}
        </div>
    );
};
