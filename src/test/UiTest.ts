import Test, {AttributeName} from "../interfaces/Test";
import {render, screen} from '@testing-library/react';
import UnitTest from "./UnitTest";

export class UiTest implements Test {

    constructor(private id: string) {
    }

    assertExists() {
        throw new Error("Method not implemented.");
    }

    assertHasText(text: string) {
        throw new Error("Method not implemented.");
    }

    assertNotExists() {
        throw new Error("Method not implemented.");
    }

    get element() {
        throw new Error("Method not implemented.");
    };

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

export default UiTest;