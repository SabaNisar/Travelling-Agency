import React from 'react';
import './home.css';
import Header from './header';
import Sidebar from './SideNavBar';

function Home() {
  return (
    <div className='homeDiv'>
      <Header/>
      <Sidebar/>
    </div>
  );
}

export default Home;
