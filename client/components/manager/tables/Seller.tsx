import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper';
import styles from './styles.module.scss'

interface SellerProps {
 data:any
}
 
const Seller: React.FC<SellerProps> = ({data}) => {
    const [items, setitem] = React.useState<any[]>([])
    React.useEffect(() => {
        setitem(data);
        console.log(data)
        }, [])
    return (
        <div className={styles.table_seller_container}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="center">User Type</TableCell>
                        <TableCell align="center">User Satus</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {items.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.username}
                        </TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">
                            {row.usertype === "BUYER"?
                            <div className={styles.table_seller_type_buyer}>
                                {row.usertype}
                            </div>
                            :
                            <div className={styles.table_seller_type_seller}>
                                {row.usertype}
                            </div>
                            }
                            
                            
                        </TableCell>
                        <TableCell align="right">
                            {(row.status == false)&&(row.suspendstatus == false)?
                            <div className={styles.table_seller_status_pending}>
                                PENDING
                            </div>
                            :null}
                            
                            {(row.status == true)&&(row.suspendstatus == false)?
                            <div className={styles.table_seller_status_active}>
                                ACTIVE
                            </div>
                            :null}
                            
                            {row.suspendstatus == true?
                            <div className={styles.table_seller_status_deactive}>
                                SUSPENDED
                            </div>
                            :null}
                            
                        </TableCell>
                        <TableCell>
                            <div className={styles.table_seller_action}>
                                <div className={styles.table_seller_action_verify}>Re-verification</div>
                                {(row.suspendstatus == true)||row.status == false?
                                <div className={styles.table_seller_action_activate}>Activate</div>
                                :
                                <div className={styles.table_seller_action_deactivate}>Deactivate</div>
                                }
                            </div>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    );
}

export default Seller;