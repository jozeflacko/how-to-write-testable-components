import Tester from "./Tester";
import {render, screen} from '@testing-library/react';

export class UiTester implements Tester {

    constructor(private idOrTester: string | UiTester | null) {
    }

    isAvailable(): boolean {
        return (window as any).cypress != null;
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

    getElementById(id: string) {
        throw new Error("Method not implemented.");
    }


}