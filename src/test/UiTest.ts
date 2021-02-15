//import Test, {AttributeName} from "jozefllacko-test-api";
import {render, screen} from '@testing-library/react';
import UnitTest from "./UnitTest";

type AttributeName = any;

export function isUiTest() {
    return (window as any).cypress != null;
}

export class UiTest /*implements Test*/ {

    constructor(private id: string) {
    }

    get element() {
        throw new Error("Method not implemented.");
    };

    getElementById(id: string) {
        throw new Error("Method not implemented.");
    }
    querySelectorAll(querySelector: string) {
        throw new Error("Method not implemented.");
    }
    assertIsDisabled(): void {
        throw new Error("Method not implemented.");
    }
    assertIsActive(): void {
        throw new Error("Method not implemented.");
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