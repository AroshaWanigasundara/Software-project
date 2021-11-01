import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import PendingEvents from '../manager/Pendingtickets';
import { dividerClasses } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DialogContentText from '@mui/material/DialogContentText';
import Image from 'next/image'
import remove from '../assets/icons/minus.png'
import add from '../assets/icons/plus.png'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

function createData(
  level: string,
  fixprice: number,
  fquantity: number,
  bidprice: number,
  bquantity: number,
) {
  return { level, fixprice, fquantity, bidprice, bquantity};
}

const rows = [
  createData('1', 159, 6, 124, 4),
  createData('2', 237, 9, 137, 4),
  createData('3', 262, 16, 124, 6),
  createData('4', 305, 3, 167, 4),
  createData('5', 356, 16, 149, 3),
];

interface PendingeventProps {

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

const Pendingevents: React.FC<PendingeventProps> = ({}) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
        console.log('asd');
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="manager-c-tickets" onClick={handleClickOpen}>
                <div>
                    <div className="manager-c-tickets-top">
                        <div className="manager-c-tickets-top-info">
                            <div className="manager-c-tickets-top-info-left">
                                <div className="manager-c-tickets-top-info-left-name">
                                    Event name
                                </div>
                                <div className="manager-c-tickets-top-info-left-date">
                                    2021-08-23
                                </div>
                            </div>
                            <div className="manager-c-tickets-top-info-right">
                                <div className="manager-c-tickets-top-info-right-nooftickets">460</div>
                                <div className="manager-c-tickets-top-info-right-tickets">tickets</div>
                            </div>
                        </div>
                    </div>
                    <h5 className="manager-c-tickets-cardstatus">Info</h5>
                </div>
            </div>
            <BootstrapDialog 
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Pending Event
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="ticketview">
            <h1>Evante Name - Evante Name Name</h1>  
          </div>  
          <Grid sx={{ maxWidth: 480 }}>
            <Grid margin-top="20px">
              <Box sx={{ flexGrow: 1 }}>
                <Grid  className="manager-eventinfo-font" container spacing={1}>
                  <Grid item xs={6}>
                    <Typography> Event Venue: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                     <Typography> Event Date: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Event Time: </Typography>
                  </Grid>
                </Grid>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ticket Level</TableCell>
            <TableCell align="right">Fix Price&nbsp;(Rs)</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Bid Price&nbsp;(Rs)</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.level}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.level}
              </TableCell>
              <TableCell align="right">{row.fixprice}</TableCell>
              <TableCell align="right">{row.fquantity}</TableCell>
              <TableCell align="right">{row.bidprice}</TableCell>
              <TableCell align="right">{row.bquantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </Box>
            </Grid>
          </Grid>
          <Grid spacing={5}>
          <Grid spacing={5}>
          <Stack direction="row" justifyContent="right">
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete Event
            </Button>
          </Stack>
          </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>       
    </div>
  );
}

export default Pendingevents;