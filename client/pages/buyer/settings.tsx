import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Resetpw from '../../components/buyer/Resetpw'
const settings: NextPage = () => {
        return (
            <div className="buyer-bg">
                <Navbar/>
                <div className="buyer-index">
                    <Sidebar id="5"/>
                    <div className='buyer-setting buyer-index-container-parent'>
                       <h1>Settings</h1>
                       <div className='buyer-setting-container'><Resetpw /></div> 
                       
                    </div>
                </div>
            </div>
        );
}

export default settings;