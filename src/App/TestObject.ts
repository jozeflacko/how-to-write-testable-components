import getTestIdentifiers from "./getTestIdentifiers";

import TestObject from "../test/TestObject";

export default class AppTestObject extends TestObject {

    get description() {
        const id = this.testIdentifiers.description;
        return this.test(id);
    }

    private get testIdentifiers() {
        return getTestIdentifiers(this.id);
    }
}


/*
// Annotation!
function TestObject<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        getTester = UiTester;
    };
}
*/


