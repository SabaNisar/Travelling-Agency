import React from 'react';
import './SideNavBar.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BsTrainFront ,BsDashCircleDotted  , BsHouseFill, BsMenuAppFill , BsMenuButtonFill, BsListCheck , 
  BsHeartFill, BsJustify} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
 
function SideNavBar(params) {
  return(
    
<Sidebar>
  <Menu id='menu'>
    <MenuItem> <BsTrainFront  className='icon'/> Travelling Agency  <span className='icon close_icon'>X</span> </MenuItem>   
    <MenuItem component={<Link to="/Home" />}> <BsDashCircleDotted className='icon'/> Dashboard </MenuItem>
    
    <SubMenu className="SubMenu" label="Hotel" icon={<BsHouseFill/>}>
      <MenuItem component={<Link to="/Home/AddHotel" />}> Add Hotel </MenuItem>
      <MenuItem component={<Link to="/Home/ViewAllHotels" />}> View All Hotels </MenuItem>
      <MenuItem> Update Hotel </MenuItem>
      <MenuItem> Delete Hotel</MenuItem>
    </SubMenu>
    <SubMenu label="Honeymoon" icon={<BsHeartFill/>}>
      <MenuItem component={<Link to="/Home/AddHoneymoon" />}> Add Honeymoon </MenuItem>
      <MenuItem component={<Link to="/Home/" />}> View All Honeymoon </MenuItem>
      <MenuItem component={<Link to="/Home/" />}> Update Honeymoon </MenuItem>
      <MenuItem component={<Link to="/Home/" />}> Delete Honeymoon</MenuItem>
    </SubMenu>
    <SubMenu label="Restaurants" icon={<BsMenuAppFill/>}>
      <MenuItem component={<Link to="/Home/" />}> Add Restaurants </MenuItem>
      <MenuItem component={<Link to="/Home/" />}> View All Restaurants </MenuItem>
      <MenuItem component={<Link to="/Home/" />}> Update Restaurants</MenuItem>
      <MenuItem component={<Link to="/Home/" />}> Delete Restaurants</MenuItem>
    </SubMenu>
    <SubMenu label="Restaurants Offer" icon={<BsListCheck/>}>
      <MenuItem component={<Link to="/Home/" />}> Add Restaurants Offer </MenuItem>
      <MenuItem component={<Link to="/Home/" />}> View All Restaurants Offer </MenuItem>
      <MenuItem component={<Link to="/Home/" />}> Update Restaurants Offer </MenuItem>
      <MenuItem component={<Link to="/Home/" />}> Delete Restaurants Offer</MenuItem>
    </SubMenu>
    <MenuItem icon={<BsMenuButtonFill />} component={<Link to="/Home/" />}> Show All booking <br></br>
    reports  </MenuItem>
    </Menu>
</Sidebar>
  )
  
}
export default SideNavBar;