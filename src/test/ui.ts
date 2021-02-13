import Tester from "./Tester";
import {render, screen} from '@testing-library/react';

export function unitTest(component: JSX.Element) {
    render(component);
}

export class UnitTester implements Tester<UnitTester> {

    constructor(private idOrTester: string | UnitTester) {
    }

    isAvailable(): boolean {
        throw new Error("Method not implemented.");
    }

    assertNotExists(): UnitTester {
        expect(this.getThis()).not.toBeInTheDocument();
        return this;
    }

    assertExists() {
        expect(this.getThis()).toBeInTheDocument();
        return this;
    }

    assertHasText(text: string) {
        expect(this.getThis()).toHaveTextContent(text);
        return this;
    }

    getElementById(id: string) {
        return new UnitTester(id);
    }

    private getThis(idOrTester: string | UnitTester = this.idOrTester) {
        if (typeof idOrTester === 'string') {
            return screen.getByTestId(idOrTester);
        } else {
            return idOrTester;
        }
    }
}