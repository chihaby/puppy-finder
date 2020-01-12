import React from "react";
import { Button } from "./GetData";
export const ButtonList = props => (
    <div>
        <h1>Constant list</h1>
        {Object.keys(props.list)
            .map(breed => <Button onClick={props.handleSubmit}>{breed}</Button>)
            .slice(1, 9)}
    </div>
);
