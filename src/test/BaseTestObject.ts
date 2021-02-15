
import {UnitTest} from "./UnitTest";
import {UiTest, isUiTest} from "./UiTest";

export default abstract class BaseTestObject {

    constructor(public readonly id: string) {
    }

    getObject(id = this.id) {
       return !isUiTest() ? new UnitTest(id) : new UiTest(id);
    };

    get root() {
        return this.getObject(this.id);
    }

    abstract get names(): unknown;
}