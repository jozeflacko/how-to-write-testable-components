import ReactDOM from "react-dom";
import React from "react";
import {renderUnitTest, isUnitTest} from './test/UnitTest';

export default function render(element: JSX.Element) {
    if (isUnitTest()) {
        renderUnitTest(element)
    } else {
        renderProduction(element);
    }
}

function renderProduction(element: JSX.Element, placeholderId = 'root') {
    ReactDOM.render(
        <React.StrictMode>
            {element}
        </React.StrictMode>,
        document.getElementById(placeholderId)
    );
}