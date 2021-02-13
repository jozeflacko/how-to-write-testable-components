import getNames from "./getNames";
import ButtonTestObject from '../../components/Button/TestObject';

import BaseTestObject from "../../test/BaseTestObject";

export default class TestObject extends BaseTestObject {

    get description() {
        const id = this.names.id.description;
        return this.getObject(id);
    }

    get buttonNavigateToReactJs() {
        const id = this.names.id.buttonGoToReactJs;
        return new ButtonTestObject(id);
    }

    get names() {
        return getNames(this.id);
    }
}


