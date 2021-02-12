import './Card.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Card(props) {

    const { pokedexNumber } = useParams();

    const [typeList, setTypeList] = useState([]);
    const [circleStyle, setCircleStyle] = useState({});

    React.useEffect(() => {

        //Movement Animation to happen
        const card = document.querySelector('.card');
        const container = document.querySelector('.container');


        //Items
        const title = document.querySelector('.title');
        const poke = document.querySelector('.poke img');
        const number = document.querySelector('.number button');
        const description = document.querySelector('.info h3');
        const types = document.querySelector('.types');
        const circle = document.querySelector('.circle');


        async function getPokemon(url, urlSpecie) {
            try {
                const pokemon = (await axios.get(url)).data;
                const pokemonDescription = (await axios.get(urlSpecie)).data.flavor_text_entries[10].flavor_text;

                setTypeList([...pokemon.types]);

                title.innerHTML = pokemon.forms[0].name;
                poke.src = pokemon.sprites.other['official-artwork'].front_default;
                description.innerHTML = pokemonDescription;
                
                const gradientColor1 = `var(--color-${pokemon.types[0].type.name})`;
                const gradientColor2 = pokemon.types[1] ? `var(--color-${pokemon.types[1].type.name})` : '#fff';

                setCircleStyle({
                    background: `linear-gradient(
                        to right,
                        ${gradientColor1},
                        ${gradientColor2}
                    )`
                });

                container.style.display = 'flex';
            } catch (error) {
                console.log(error);
            }
        }


        // Get pokemon
        let url = `https://pokeapi.co/api/v2/pokemon/${pokedexNumber}`;
        let urlSpecie = `https://pokeapi.co/api/v2/pokemon-species/${pokedexNumber}`;
        getPokemon(url, urlSpecie);


        //Moving Animation Event
        container.addEventListener('mousemove', e => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
        });

        //Animate In
        container.addEventListener('mouseenter', e => {
            card.style.transition = 'none';
            //Popout
            title.style.transform = 'translateZ(100px)';
            poke.style.transform = 'translateZ(150px)';
            number.style.transform = 'translateZ(75px)';
            types.style.transform = 'translateZ(100px)';
            description.style.transform = 'translateZ(75px)';
        });

        //Animate Out
        container.addEventListener('mouseleave', e => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = `rotateY(0deg) rotateX(0deg)`
            //Popback
            title.style.transform = 'translateZ(0px)';
            poke.style.transform = 'translateZ(0px)';
            number.style.transform = 'translateZ(0px)';
            types.style.transform = 'translateZ(0px)';
            description.style.transform = 'translateZ(0px)';
        });
    }, [pokedexNumber]);

    // Styles
    // const buttonStyle = {
    //     backgroundColor: `var(--color-${typeList[0].type.name})`
    // }


    return (
        <div className="Card">
            <div className="container">
                <div className="card">
                    <div className="poke">
                        <div className="circle" style={circleStyle}></div>
                        <img alt=""></img>
                    </div>
                    <div className="info">
                        <h1 className="title"></h1>
                        <h3></h3>
                        <div className="types" >
                            {
                                typeList[0] ?
                                    <button className={`btn type-${typeList[0].type.name}`}>
                                        {typeList[0].type.name || null}
                                    </button> :
                                    null
                            }
                            {
                                typeList[1] ?
                                    <button className={`btn type-${typeList[1].type.name}`}>
                                        {typeList[1].type.name || null}
                                    </button> :
                                    null
                            }
                        </div>
                        <div className="number">
                            <Link to="/">
                                <button>
                                    {'<'}  Pokedex Number <strong>{pokedexNumber}</strong>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
