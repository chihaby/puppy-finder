import React from "react";
import { RdmButton } from "./GetData";

export const RandomButtons = props => (
    <div>
        <div>
            <button onClick={props.randomizeButtonValues}>
                Click for random list
            </button>
        </div>
        <div>
            {props.rdmButtonvalues
                .map(breed => (
                    <RdmButton onClick={props.handleSubmit}>{breed}</RdmButton>
                ))
                .slice(1, 9)}
        </div>
    </div>
);
