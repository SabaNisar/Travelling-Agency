import React from 'react';
import './AddHotel.css';

function AddHotel() {
    return (
      <div className='AddHotel'>
      
        <div className="container">
            <div className="AddHotelheader">
                <div className="text">Add Hotel</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                
                <div className="input">
                    <select className="select">
                        <option value="Select Holet" className='option'>Select Holet</option>
                        <option value="otherOption" className='option'>Other option</option>
                        <option value="otherOption" className='option'>Other option</option>
                        <option value="otherOption" className='option'>Other option</option>
                        <option value="otherOption" className='option'>Other option</option>
                        <option value="otherOption" className='option'>Other option</option>

                    </select>
                </div>
                <div className="input">
                    <input type="Date" placeholder="Enter Start Date" name="" id="" />
                </div>
                <div className="input">
                    <input type="Date" placeholder="Enter End Date" name="" id="" />
                </div>
                <div className="input">
                    <input type="Text"  placeholder="Enter Package Name" name="" id="" />
                </div>
                <div className="input">
                    <select className="select">
                        <option value="NumberOfPersons">Number of Persons</option>
                        <option value="otherOption" className='option'>1 - One</option>
                        <option value="otherOption" className='option'>2</option>
                        <option value="otherOption" className='option'>3</option>
                        <option value="otherOption" className='option'>4</option>
                        <option value="otherOption" className='option'>5</option>


                    </select>
                </div>
                <div className="input">
                    <input type="Text"  placeholder="Enter Price" name="" id="" />
                </div>
              
            </div>
            <div className="submit-container">
                <div className="submit">
                Add Hotel
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default AddHotel;
  
