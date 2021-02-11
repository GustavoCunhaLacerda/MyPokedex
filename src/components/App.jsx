import './App.css';
import React from 'react';

import MiniCard from './layout/MiniCard';

export default function App(props) {
    let miniCards = [];
    for (let i = 1; i <= 151; i++) {
        miniCards.push(
            <MiniCard pokedexNumber={i} key={i}/>
        );
    }

    return (
        <div className="App">
            {miniCards}
        </div>
    );
};
