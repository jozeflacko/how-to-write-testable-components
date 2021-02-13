import React from 'react';
import './App.css';
import Group from '../../components/Group';
import Button from '../../components/Button';
import Text from '../../components/Text';
import TestObject from './TestObject';

import getNames from "./getNames";

interface Props {
    id: string;
}

export default function App(props: Props) {

    const names = getNames(props.id);

    return (
        <Group id={names.id.root}>
            <Text id={names.id.description}>
                Hello World!
            </Text>
            <Button
                id={names.id.buttonGoToReactJs}
                href={'https://reactjs.org'}
            >
                Go to React JS
            </Button>
        </Group>
    );
}
App.TestObject = TestObject;


