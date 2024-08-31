import React from 'react';
import Header from './header';
import Sidebar from './SideNavBar';
import './AddHoneymoon.css';

function AddHoneymoon() {
    return (
      <div className='AddHoneymoon'>
      
        <div className="container">
            <div className="AddHoneymoonheader">
                <div className="text">Add Honeymoon</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                
                <div className="input">
                    <input type="text" placeholder="Enter Your Name" name="" id="" />
                </div>
                <div className="input">
                    <input type="Date" placeholder="Enter Start Date" name="" id="" />
                </div>
                <div className="input">
                    <input type="Date" placeholder="Enter end Date" name="" id="" />
                </div>
                <div className="input">
                    <input type="Text"  placeholder="Enter Hotel Name" name="" id="" />
                </div>
                <div className="input">
                    <input type="Text"  placeholder="Enter Price" name="" id="" />
                </div>
              
            </div>
            <div className="submit-container">
                <div className="submit">
                 Add Honeymoon
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default AddHoneymoon;
  
