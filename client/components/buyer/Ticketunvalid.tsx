import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

interface TicketunvalidProps {
  level : string,
 }

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
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
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
const Ticketunvalid: React.FC<TicketunvalidProps> = ({level}) => {
  const [open, setOpen] = React.useState(false);
  const [Ticketcolor, setTicketcolor] =  React.useState("");
  const [Ticketlevel, setTicketlevel] =  React.useState("");
  const [Ticketlevelcolor, setTicketlevelcolor] =  React.useState("");
  const [Ticketimg, setTicketimg] =  React.useState("");
  useEffect(()=>{
    setTicketcolor("#881700");
    setTicketimg(`url("https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg")`);
    setTicketlevel(level);
    if( level == "1"){
      setTicketlevelcolor("#57B473");
    }else if(level == "2"){
      setTicketlevelcolor("#752E9E");
    }else if(level == "3"){
      setTicketlevelcolor("#5776B4");
    }else if(level == "4"){
      setTicketlevelcolor("#AE006E");
    }else{
      setTicketlevelcolor("#AE6300");
    }
    
  },[])
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <div style={{backgroundColor: Ticketcolor}} className="buyer-c-ticketunvalid" onClick={handleClickOpen}>
            <div>
                <div style={{backgroundImage: Ticketimg}} className="buyer-c-ticketunvalid-top">
                    <div className="buyer-c-ticketunvalid-top-head">
                        <div className="buyer-c-ticketunvalid-top-head-left">
                            13:30:00
                        </div>
                        <div style={{backgroundColor: Ticketlevelcolor}} className="buyer-c-ticketunvalid-top-head-right">
                            <div className="buyer-c-ticketunvalid-top-head-right-1">
                                Level
                            </div>
                            <div className="buyer-c-ticketunvalid-top-head-right-2" id="ticket-level">
                                {Ticketlevel}
                            </div>
                        </div>
                    </div>
                    <div className="buyer-c-ticketunvalid-top-info">
                        <div className="buyer-c-ticketunvalid-top-info-left">
                            <div className="buyer-c-ticketunvalid-top-info-left-name">
                                Event name
                            </div>
                            <div className="buyer-c-ticketunvalid-top-info-left-date">
                                2021-08-23
                            </div>
                        </div>
                        <div className="buyer-c-ticketunvalid-top-info-right">
                            <div className="buyer-c-ticketunvalid-top-info-right-nooftickets">460</div>
                            <div className="buyer-c-ticketunvalid-top-info-right-tickets">tickets</div>
                        </div>
                    </div>
                </div>
                <h5 className="buyer-c-ticketunvalid-cardstatus">card status</h5>
            </div>
        </div>


      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Amount for a Ticket</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              startAdornment={<InputAdornment position="start">LKR</InputAdornment>}
            />
          </FormControl>
          <div className='x'><center><b>X</b></center></div>
          <div><center>4 Tickes</center></div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
export default Ticketunvalid;