import React from "react";
import "./ModalAgregar.css"
import { IconButton } from '@material-ui/core'
import {Fab, Modal, Box, Grid, TextField} from "@material-ui/core"
import {Add, AddBox, PlaylistAddCheck} from "@material-ui/icons"
import { AppContexto } from "../AppContexto";



function ModalAgregar(){

    const style = {
        position: 'absolute',
        bottom: '30px',
        right: '0%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '10px',
        border: '2px solid #2F54B3',
/*         boxShadow: 100, */
        p: 1,
      };

    const {openAdd: open, 
            setOpenAdd, 
            agregarTarea,
            tareaAdd,
            setTareaAdd,
                        } = React.useContext(AppContexto)

    const handleClose = () => { 
                                setOpenAdd(false);
                                setTareaAdd('');
                            }

    const onAddChange = (event) => {
/*         console.log(event.target.value); */
        setTareaAdd(event.target.value);
    }
    return (
        
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <Grid container spacing={15}>
                            <Grid item xs={10}>
                                <TextField
                                    className='AgregarTarea'
                                    label="Nueva Tarea" 
                                    variant="outlined"
                                    onChange={onAddChange}
                                    defaultValue={''}
                                ></TextField>
                            </Grid>
                            <Grid item xs={2}>
                            <IconButton
                                color="primary"
                                aria-label="add" 
                                className="BotonAdd"
                                size="large" 
                                onClick={()=>{agregarTarea(tareaAdd)}}>
                                <PlaylistAddCheck />
                            </IconButton>
                            </Grid>
                        </Grid>
                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
                    </Box>
            </Modal>

    )
}

export {ModalAgregar};