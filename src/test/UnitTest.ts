import Test, {AttributeName} from "../interfaces/Test";
import {render, screen} from '@testing-library/react';

export function isUnitTest() {
    return (process.env.NODE_ENV + '').toLocaleLowerCase() === 'test';
}

export function renderUnitTest(component: JSX.Element) {
    render(component);
}

export class UnitTest implements Test<HTMLElement> {

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

    assertHasAttribute(attributeName: AttributeName, attributeValue: string): void {
        throw new Error("Method not implemented.");
    }

    assertHasNotAttribute(attributeName: AttributeName, attributeValue: string): void {
        throw new Error("Method not implemented.");
    }

    click(): void {
        throw new Error("Method not implemented.");
    }

    write(value: string | number): void {
        throw new Error("Method not implemented.");
    }
}

export default UnitTest;