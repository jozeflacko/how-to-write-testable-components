import Tester from "./Tester";
import {UnitTester, isUnitTest} from "./unit";
import {UiTester} from "./ui";

export default abstract class BaseTestObject {

    constructor(public readonly id: string) {
    }

    getObject(id = this.id) {
        return isUnitTest() ? new UnitTester(id) : new UiTester(id);
    };

    get root() {
        return this.getObject(this.id);
    }
}