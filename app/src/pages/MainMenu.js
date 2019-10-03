/* *
  title: MainMenu.js 

  date: 10/3/2019

  author:  javier olaya

  description: this content handles the main nav bar for the web page
         
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import  Picture  from '../components/Picture';
import  profile  from '../pictures/profile.png';
import pages from '../css/index.scss';

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

const MainMenu = () => <nav className={"mainMenu"}>
  <Picture picture={profile }></Picture>
  <NavLink to="/" activeStyle={selectedStyle}>MineSweep</NavLink>
  <NavLink to="/home" activeStyle={selectedStyle}>Home</NavLink>
</nav>

export default MainMenu;