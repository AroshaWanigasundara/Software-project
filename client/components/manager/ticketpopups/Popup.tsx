import React from 'react'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import axios from 'axios'
import DialogActions from '@mui/material/DialogActions';
import {gethost} from '../../../session/Session'
import Swal from 'sweetalert2'
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SellIcon from '@mui/icons-material/Sell';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import EventInfo from '../../seller/ticketpopups/EventInfo'
import SellingInfo from '../../seller/ticketpopups/SellingInfo'
import Tickets from '../../seller/ticketpopups/Tickets'
import Analitics from '../../seller/ticketpopups/Analitics'
import Nopermission from './Nopermission'
import Styles from './styles.module.scss'


interface PopupProps {
    data:any,
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

const Popup: React.FC<PopupProps> = ({data}) => {

    const [Open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const [items, setitem] = React.useState<any[]>([])
    React.useEffect(()=>{
      setitem(data.tickets);
    },[])

    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const declined = ()=>{
      setOpen(false);
      Swal.fire({
        title: 'Are you sure?',
        input: 'text',
        text: "You won't be able to decline this Event!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, decline it!',
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          setOpen(true);
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          setOpen(true);
        }
      })
    }

    const approval = ()=>{
      setOpen(false);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to approve this Event!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Approve it!',
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          setOpen(true);
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          setOpen(true);
        }
      })
    }

    return (
        <div className={Styles.bg}>
            <div className={Styles.seller_c_tickets} onClick={handleClickOpen}>
                <div>
                    <div className={Styles.seller_c_tickets_top}>
                        <div className={Styles.seller_c_tickets_top_info}>
                            <div className={Styles.seller_c_tickets_top_info_left}>
                                <div className={Styles.seller_c_tickets_top_info_left_name}>
                                    {data.event_name}
                                </div>
                                <div className={Styles.seller_c_tickets_top_info_left_date}>
                                    {data.event_date} 
                                </div>
                            </div>
                            <div className={Styles.seller_c_tickets_top_info_right}>
                                <div className={Styles.seller_c_tickets_top_info_right_nooftickets}>460</div>
                                <div className={Styles.seller_c_tickets_top_info_right_tickets}>tickets</div>
                            </div>
                        </div>
                    </div>
                    <h5 className={Styles.seller_c_tickets_cardstatus}>Info</h5>
                </div>
            </div>
            <BootstrapDialog aria-labelledby={Styles.customized_dialog_title1} open={Open} maxWidth={'lg'} fullWidth={true}>
                <BootstrapDialogTitle id={Styles.customized_dialog_title1} onClose={handleClose}>
                    {data.status} EVENT
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div className={Styles.ticketview}>
                        <h1>{data.event_name}</h1>  
                    </div>
                    <TabContext value={value}>
                    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                        <Tab icon={<EventNoteIcon />} iconPosition="start" label="Event Summery" value={"1"}/>
                        <Tab icon={<FavoriteIcon />} iconPosition="start" label="Selling Info" value={"3"}/>
                        <Tab icon={<ConfirmationNumberIcon />} iconPosition="start" label="Tickets" value={"4"}/>
                        <Tab icon={<EqualizerIcon />} iconPosition="start" label="Analitics" value={"5"}/>
                    </Tabs>  
                    <TabPanel value="1">
                        <EventInfo data={data}/>
                    </TabPanel>
                    <TabPanel value="3">{data.status=="ACTIVE"?<SellingInfo/>:<Nopermission/>}</TabPanel>
                    <TabPanel value="4">{data.status=="ACTIVE"?<Tickets/>:<Nopermission/>}</TabPanel>
                    <TabPanel value="5">{data.status=="ACTIVE"?<Analitics/>:<Nopermission/>}</TabPanel>
                    </TabContext>
                    
                </DialogContent>
                <DialogActions>
                  {data.status == 'PENDING' || data.status == 'DECLINED'?
                  <Button variant="outlined" color="success" onClick={approval}>
                      Approve
                  </Button>
                  :null}
                  {data.status == 'PENDING' || data.status == 'ACTIVE'?
                    <Button variant="outlined" color="error" onClick={declined}>
                        Decline
                    </Button>
                  :null}
                </DialogActions>
            </BootstrapDialog>   
        </div>
    );
}

export default Popup;