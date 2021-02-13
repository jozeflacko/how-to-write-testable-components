import getNames from "./getNames";

import BaseTestObject from "../../test/BaseTestObject";

export default class TestObject extends BaseTestObject {
    assertHasHref(hrefValue: string) {
        // TODO
    }

    get names(): unknown {
        return getNames(this.id);
    }
}


