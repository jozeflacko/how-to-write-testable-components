import getNames from "./getNames";

import BaseTestObject from "../../test/BaseTestObject";

export default class TestObject extends BaseTestObject {

    get names() {
        return getNames(this.id);
    }

}


