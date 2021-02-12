import './Content.css';
import { Switch, Route } from 'react-router-dom';

import Home from '../../views/Home';
import SingleCard from '../../views/SingleCard';

export default function Content(props) {
    return (
        <main className="Content">
            <Switch>
                <Route path="/pokemon/:pokedexNumber">
                    <SingleCard></SingleCard>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </main>
    );
};