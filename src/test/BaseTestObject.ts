import Test from "../interfaces/Test";
import {UnitTest, isUnitTest} from "./UnitTest";
import {UiTest} from "./UiTest";

export default abstract class BaseTestObject {

    constructor(public readonly id: string) {
    }

    getObject(id = this.id) {
        return isUnitTest() ? new UnitTest(id) : new UiTest(id);
    };

    get root() {
        return this.getObject(this.id);
    }

    abstract get names(): unknown;
}