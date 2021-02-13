import React from "react";
import getNames from "./getNames";
import BaseProps from "../../interfaces/BaseProps";

export interface Props extends BaseProps {
    children: any;
}

export default function Group(props: Props) {

    const names = getNames(props.id);

    return <div
        data-testid={names.id.root}
    >
        {props.children}
    </div>;
}