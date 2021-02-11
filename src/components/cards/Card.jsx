import './Card.css';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Card(props) {

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

        async function getPokemon(url) {
            try {
                const pokemon = (await axios.get(url, null)).data;
                console.log(url);


                title.innerHTML = pokemon.forms[0].name;
                poke.src = pokemon.sprites.other['official-artwork'].front_default;

                container.style.display = 'flex';
            } catch (error) {
                console.log(error);
            }
        }


        // Get pokemon
        let url = 'https://pokeapi.co/api/v2/pokemon/1'
        // url += props.pokeNumber;

        getPokemon(url);


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
    }, []);




    return (
        <div className="Card">
            <div className="container">
                <div className="card">
                    <div className="poke">
                        <div className="circle"></div>
                        <img alt=""></img>
                    </div>
                    <div className="info">
                        <h1 className="title"></h1>
                        <h3></h3>
                        <div className="types">
                            <button>TYPE1</button>
                            <button>TYPE2</button>
                        </div>
                        <div className="number">
                            <Link to="/">
                                <button>
                                    Pokedex Number ###
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
