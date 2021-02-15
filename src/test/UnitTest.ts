//import Test, {AttributeName} from "jozefllacko-test-api";
import {render, RenderResult, screen, fireEvent} from '@testing-library/react';

export function isUnitTest() {
    return (process.env.NODE_ENV + '').toLocaleLowerCase() === 'test';
}

let dom: RenderResult | null = null;

type AttributeName = any;

export function renderUnitTest(component: JSX.Element) {
    dom = render(component);
}

export class UnitTest /*implements Test*/ {

    constructor(private querySelector: string) {
    }

    get elements() {
        if (dom == null) {
            throw new Error("First you have to render component!");
        }
        return dom.container.querySelectorAll(this.querySelector);
    }

    querySelectorAll(querySelector: string) {
        return new UnitTest(querySelector);
    }

    assertIsDisabled(): void {
        this.elements.forEach(el => expect(el).toBeDisabled());
    }

    assertIsActive(): void {
        this.elements.forEach(el => expect(el).not.toBeDisabled());
    }


    assertNotExists() {
        this.elements.forEach(el => expect(el).not.toBeInTheDocument());
    }

    assertExists() {
        this.elements.forEach(el => expect(el).toBeInTheDocument());
    }

    assertHasText(text: string) {
        this.elements.forEach(el => expect(el).not.toHaveTextContent(text));
    }

    assertHasAttribute(attributeName: AttributeName, attributeValue: string): void {
        this.elements.forEach(el => expect(el).toHaveAttribute(attributeName, attributeValue));
    }

    assertHasNotAttribute(attributeName: AttributeName): void {
        this.elements.forEach(el => expect(el).not.toHaveAttribute(attributeName));
    }

    click(): void {
        if (this.elements.length > 1) {
            throw new Error('Multiple selected elements');
        }
        fireEvent.click(this.elements[0]);
    }

    write(value: string | number): void {
        if (this.elements.length > 1) {
            throw new Error('Multiple selected elements');
        }
        fireEvent.change(this.elements[0], {target: {value: value}});
    }
}

export default UnitTest;