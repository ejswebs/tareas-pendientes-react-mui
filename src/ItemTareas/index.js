import { 
    IconButton, 
    ListItem, 
    ListItemAvatar, 
    Avatar, 
    ListItemText, 
    Divider} from "@material-ui/core";

import {Delete, DoneOutline} from "@material-ui/icons"
import React from "react";
import "./ItemTareas.css";

function ItemTareas(props) {
/*     const onComplete = () => {
        console.log(props.completed)
    }; */
/*     const onDelete = () => {
        console.log('Borraste ' + props.text)
    }; */


    return (
        <React.Fragment>
            <ListItem className="ItemTarea">
                <ListItemAvatar onClick={props.onComplete} >
                    <Avatar className={`MuiAvatar-colorDefault ${props.completed && 'MuiAvatar-colorDefault--completed'}`} >
                        <DoneOutline/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText className={`ItemText ${props.completed && 'ItemText--completed'}`}
                    primary={props.text}
                />
                <IconButton 
                    edge="end" 
                    aria-label="delete" 
                    color="secondary" 
                    onClick={props.onDelete}>
                    <Delete className="icon-delete"/>
                </IconButton> 
            </ListItem>
            <Divider />
        </React.Fragment>
        
    )
}

export {ItemTareas};