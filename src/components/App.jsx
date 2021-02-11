import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Content from './layout/Content';
import Title from './layout/Title';

export default function App(props) {
    return (
        <div className="App">
            <Router>
                <Content></Content>
            </Router>
        </div>
    );
};
