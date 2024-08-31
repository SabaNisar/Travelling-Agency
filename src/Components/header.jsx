import React from "react";
import './header.css';
import {BsBellFill, BsEnvelope, BsFillPersonFill, BsSearch, BsJustify} 
from "react-icons/bs";

function Header() {
    return(
        <header className="header">
            <div className="menu-icons">
                <BsJustify className="icon"/>
            </div>
           
                
               

            <div className="header-right">
                <BsSearch className="icon"/>
                <BsBellFill className="icon"/>
                <BsEnvelope className="icon"/>
                <BsFillPersonFill className="icon"/>


            </div>
        </header>
    )
    
}
export default Header