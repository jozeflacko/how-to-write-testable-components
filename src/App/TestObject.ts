import getTestIdentifiers from "./getTestIdentifiers";

import BaseTestObject from "../test/BaseTestObject";

export default class TestObject extends BaseTestObject {

    get description() {
        const id = this.testIdentifiers.description;
        return this.getObject(id);
    }

    private get testIdentifiers() {
        return getTestIdentifiers(this.id);
    }
}


