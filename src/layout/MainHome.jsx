import React from 'react';
import SideNavBar from '../Components/SideNavBar';
import Header from '../Components/header';
import { Outlet } from 'react-router-dom';
import './main.css'




const MainHome = ()=>{
    return <div className='main-app'>
        <div className='sider-bar'>
             <SideNavBar />
        </div>
        <div className='main-content'>
            <Header/>
            <div className='content'>
                <Outlet/>
                

            </div>
        </div>
    </div>
}


export default MainHome;