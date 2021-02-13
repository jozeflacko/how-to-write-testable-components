import Tester from "./Tester";
import {unitTest, UnitTester} from "./unit";
import {UiTester} from "./ui";

export default abstract class TestObject  {

    constructor(public readonly id: string) {
    }

    test(idOrJsxElement: string | JSX.Element) {
        if (typeof idOrJsxElement === 'string') {
            return this.testElement(idOrJsxElement);
        } else {
            this.testComponent(idOrJsxElement);
            return this.testElement(null);
        }
    }

    private testElement = (id: string | null = this.id) => {
        const test = this.isUnitTest ? new UnitTester(id) : new UiTester(id);
        return (id == null ? test : test.getElementById(id));
    }

    testComponent = (component: JSX.Element) => {
        if (this.isUnitTest) {
            unitTest(component);
            return this;
        } else {
            throw new Error("ui test does not need to provide test component");
        }
    }

    get isUnitTest() {
        return new UnitTester(null).isAvailable();
    }
}