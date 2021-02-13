import Tester from "./Tester";
import {render, screen} from '@testing-library/react';

export function isUnitTest() {
    return (process.env.NODE_ENV + '').toLocaleLowerCase() === 'test';
}

export function renderUnitTest(component: JSX.Element) {
    render(component);
}

export class UnitTester implements Tester<HTMLElement> {

    constructor(private id: string) {
    }

    assertNotExists() {
        expect(this.element).not.toBeInTheDocument();
    }

    assertExists() {
        expect(this.element).toBeInTheDocument();
    }

    assertHasText(text: string) {
        expect(this.element).toHaveTextContent(text);
    }

    get element() {
        return screen.getByTestId(this.id);
    }
}