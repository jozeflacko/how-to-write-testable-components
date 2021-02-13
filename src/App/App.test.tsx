import React from 'react';
import App from './App';
import TestObject from './TestObject'
import render from "../render";

test('renders learn react link', () => {

    render(<App testId={'myId'}/>);
    const {description} = new TestObject('myId');

    description.assertExists();
    description.assertHasText('Edit src/App.tsx and save to reload.');
});
