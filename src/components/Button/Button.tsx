import React from "react";
import getNames from "./getNames";
import BaseProps from "../../interfaces/BaseProps";

export interface Props extends BaseProps {
    href: string;
    children: string;
}

export default function Button(props: Props) {

    const names = getNames(props.id);

    return <a
        data-testid={names.id.root}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
    >
        {props.children}
    </a>;
}