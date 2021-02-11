import React from 'react';

import MiniCard from '../components/cards/MiniCard';
import Title from '../components/layout/Title';

export default function Home(props) {

    const flexCards = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }

    let miniCards = [];
    for (let i = 1; i <= 151; i++) {
        miniCards.push(
            <MiniCard pokedexNumber={i} key={i} />
        );
    }

    return (
        <div className="Home" style={flexCards}>
            <Title></Title>
            {miniCards}
        </div>
    );
};
