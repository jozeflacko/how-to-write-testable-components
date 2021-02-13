import React from 'react';
import logo from '../logo.svg';
import './App.css';

import getTestIdentifiers from "./getTestIdentifiers";

interface Props {
    testId: string;
}

export default function App(props: Props) {

    const names = getTestIdentifiers(props.testId);

    return (
        <div className="App" data-testid={names.root}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p data-testid={names.description}>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    data-testid={names.buttonGoToReactJs}
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
