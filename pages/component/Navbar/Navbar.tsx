// Navbar.js
import React, { useState } from "react";
import { menuItems } from './MenuItems';

const Navbar = () => {
 return(
    <nav>
      <ul className="menus flex gap-5">
        {menuItems.map((menu, index) => {
          return (
            <li className="menu-items" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
 )
};

export default Navbar;
