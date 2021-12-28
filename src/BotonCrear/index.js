import {  Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
/* import {Button, Modal, Box, Typography} from "@material-ui/core" */
import {ModalAgregar} from "../ModalAgregar";
import React from "react";
import "./BotonCrear.css"
import { AppContexto } from "../AppContexto";


function BotonCrear() {
/*   const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };  */

/* const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false); */

const {setOpenAdd} = React.useContext(AppContexto)
const abrirModal = () => setOpenAdd(true);
/* const handleClose = () => setOpenAdd(false); */

    return (
      <React.Fragment >
        <ModalAgregar />
  {/*          open={openAdd}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
 
              <Box sx={style} className="ModalAgregar">
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
              </Box>
        </ModalAgregar>   */}
        <Fab 
          color="primary" 
          aria-label="add" 
          className="BotonCrear" 
          onClick={abrirModal}>
          <Add />
        </Fab>
      </React.Fragment>
    )
}

export {BotonCrear};