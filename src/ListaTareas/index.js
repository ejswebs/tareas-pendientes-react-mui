import React from "react";
import {List} from "@material-ui/core"

function ListaTareas(props) {
    return(
        <List>
            {props.children}
        </List>
    )
}

export {ListaTareas};