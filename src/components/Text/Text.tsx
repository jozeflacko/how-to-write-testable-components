import React from "react";
import getNames from "./getNames";
import BaseProps from "../../interfaces/BaseProps";

export interface Props extends BaseProps {
    children: string;
}

export default function Text(props: Props) {

    const names = getNames(props.id);

    return <p
        data-testid={names.id.root}
    >
        {props.children}
    </p>;
}