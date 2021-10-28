import React,{ useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Tabcustom from '../../components/user/Tabcustom'
import {Grid} from '@mui/material';

const index: NextPage = () => {
  return (
      <div style={{backgroundColor:"#FBFBF4"}}>
        <Navbar/>
        <Grid className = "index_container">
          <div className = "main_container">
            <Tabcustom />
          </div>   
        </Grid>
      </div>
  );
}
export default index;
