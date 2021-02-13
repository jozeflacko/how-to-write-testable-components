import React from 'react';
import App from './App';
import render from "../../render";

test('should render app', () => {

    render(<App id={'myId'}/>);
    const {
        description,
        buttonNavigateToReactJs
    } = new App.TestObject('myId');

    description.assertExists();
    description.assertHasText('Hello World!');

    buttonNavigateToReactJs.assertHasHref('Go to React JS');
});
