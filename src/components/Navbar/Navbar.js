import React, {useState} from 'react'
import './Navbar.css'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import Pay from '../../Assets/PayMeBac.png'

import { SidebarData } from './SidebarData';

import { Desktopbar } from './Desktopbar';


import Hero from '../Hero/Hero';
import Under from '../UnderHero/Under';
import Winner from '../Winner/Winner';
import Youtube from '../Youtube/Youtube';
import Content from '../Last/Last';
import Footer from '../Footer/Footer';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Navbar = () => {
    
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className="header">


            <div className="navbar">

                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
 
            </div>
            {/* <p>Hello</p> */}

            

            <div className="wrapper">

            <div className="logo">
                    <img src={Pay} alt="" />
            </div>

           

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>

                        <li className="navbar-toggle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        { SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span id='spann'>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        }) }

                        {/* <li id='active'>Home</li>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Contact Us</li> */}
                    </ul>
                </nav>






               


                <div className="nav-links">
                    {/* <ul>
                        <li id='active'>Home</li>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul> */}


                    { Desktopbar.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span  id='spann'>{item.title}</span>
                                    </Link>
                                </li>
                            )
                    }) }
                </div>


               
                {/* <div className="last">
                        <ul>
                            <li>Log In</li>
                        </ul>

                        <button id='btn'>Sign Up</button>

                        
                </div> */}
            </div>

        </div>
    )
}

export default Navbar
