import React from 'react';
import './sidebar.css';
import { BsTrainFront ,BsDashCircleDotted  , BsHouseFill, BsMenuAppFill , BsMenuButtonFill, BsListCheck , 
    BsHeartFill, BsJustify} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';






function Sidebar(params) {
    return(

        <aside className='sidebar'>
  
            <div className="sidebar-title">
                <div className='sidebar-brand'>
                    <BsTrainFront  className='icon'/> Travelling Agency
                </div>
                <span className='icon close_icon'>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/Home" >
                        <BsDashCircleDotted className='icon'/> Dashboard

                    </Link>
                </li>
    {/*Hotel*/}
    <Dropdown className='sidebar-list-item'>
      <Dropdown.Toggle split variant="success" id="dropdown-basic">
        
      <BsHouseFill className='icon'/> Hotel
    
      </Dropdown.Toggle>

      <Dropdown.Menu className='sidebar-sublist-item'>
        <Dropdown.Item  className='item'><Link to="/Home/AddHotel">Add Hotel</Link></Dropdown.Item><br></br>
        <Dropdown.Item className='item'><Link to="/Home/ViewAllHotels">View All Hotels</Link></Dropdown.Item><br></br>
        <Dropdown.Item  className='item'><Link to="/Home/AddHotel">Update Hotel</Link></Dropdown.Item><br></br>
        <Dropdown.Item className='item'><Link to="/Home/ViewAllHotels">Delete Hotel</Link></Dropdown.Item><br></br>
        
      </Dropdown.Menu>

    </Dropdown>

    {/* Honeymoon */}
    <Dropdown className='sidebar-list-item'>
      <Dropdown.Toggle  variant="success" id="dropdown-basic">
        
      <BsHeartFill className='icon'/> Honeymoon
    
      </Dropdown.Toggle>

      <Dropdown.Menu className='sidebar-sublist-item'>
        <Dropdown.Item  className='item'><Link to="/Home/AddHoneymoon">Add Honeymoon</Link></Dropdown.Item><br></br>
        <Dropdown.Item className='item'><Link to="/Home/ViewAllHotels">View All Honeymoon</Link></Dropdown.Item><br></br>
        <Dropdown.Item  className='item'><Link to="/Home/AddHotel">Update Honeymoon</Link></Dropdown.Item><br></br>
        <Dropdown.Item className='item'><Link to="/Home/ViewAllHotels">Delete Honeymoon</Link></Dropdown.Item><br></br>
        
      </Dropdown.Menu>
    </Dropdown>



    {/*  Restaurants */}
    <Dropdown className='sidebar-list-item'>
      <Dropdown.Toggle  variant="success" id="dropdown-basic">
        
      <BsMenuAppFill className='icon'/> Restaurants
    
      </Dropdown.Toggle>

      <Dropdown.Menu className='sidebar-sublist-item'>
        <Dropdown.Item  className='item'><Link to="/Home/AddHotel">Add Restaurants</Link></Dropdown.Item><br></br>
        <Dropdown.Item className='item'><Link to="/Home/ViewAllHotels">View All Restaurants</Link></Dropdown.Item><br></br>
        <Dropdown.Item  className='item'><Link to="/Home/AddHotel">Update Restaurants</Link></Dropdown.Item><br></br>
        <Dropdown.Item className='item'><Link to="/Home/ViewAllHotels">Delete Restaurants</Link></Dropdown.Item><br></br>
        
      </Dropdown.Menu>
    </Dropdown>



    {/*Restaurants Offer  */}
    <Dropdown className='sidebar-list-item'>
      <Dropdown.Toggle  variant="success" id="dropdown-basic">
        
      <BsListCheck className='icon'/>      Restaurants Offer 
    
      </Dropdown.Toggle>

      <Dropdown.Menu className='sidebar-sublist-item'>
        <Dropdown.Item  className='item'><Link to="/Home/AddHotel">Add Restaurants Offer </Link></Dropdown.Item><br></br>
        <Dropdown.Item className='item'><Link to="/Home/ViewAllHotels">View All Restaurants Offer </Link></Dropdown.Item><br></br>
        <Dropdown.Item  className='item'><Link to="/Home/AddHotel">Update Restaurants Offer </Link></Dropdown.Item><br></br>
        <Dropdown.Item className='item'><Link to="/Home/ViewAllHotels">Delete Restaurants Offer </Link></Dropdown.Item><br></br>
        
      </Dropdown.Menu>
    </Dropdown>


     {/*show All booking reports  */}
     <Dropdown className='sidebar-list-item'>
      <Dropdown.Toggle  variant="success" id="dropdown-basic">
        
      <BsMenuButtonFill className='icon'/> Show All booking
                        reports
    
      </Dropdown.Toggle>

      <Dropdown.Menu className='sidebar-sublist-item'>
        <Dropdown.Item  className='item'><Link to="/Home/AddHotel">Add Restaurants Offer </Link></Dropdown.Item><br></br>
        <Dropdown.Item className='item'><Link to="/Home/ViewAllHotels">View All Restaurants Offer </Link></Dropdown.Item><br></br>
        <Dropdown.Item  className='item'><Link to="/Home/AddHotel">Update Restaurants Offer </Link></Dropdown.Item><br></br>
        <Dropdown.Item className='item'><Link to="/Home/ViewAllHotels">Delete Restaurants Offer </Link></Dropdown.Item><br></br>
        
      </Dropdown.Menu>
    </Dropdown>
              
              
                <li className='sidebar-list-item'>
                    <a href="">
                        
                    </a>
                </li>
            </ul>
        </aside>

    )
}
export default Sidebar