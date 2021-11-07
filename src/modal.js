import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import "./modal.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div>
      <Button onClick={handleClickOpen} className="dialogbtn">
        
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <div className="heading">
        Create new contact
        </div>
        <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Name"
      />
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Last Name"
        style={{marginLeft:"10px"}}
      />
       <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Phone Number"
        
      />
          
        </BootstrapDialogTitle>
        
      
        <DialogActions>
          <Button autoFocus onClick={handleClose} className="changebtn">
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
