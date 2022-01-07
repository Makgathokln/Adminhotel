import React, { useState } from 'react'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { IconContext } from 'react-icons'
// import './Stylling.css'

const Header = () =>{
    const [sidebar,setSidebar]=useState(false)
    const showSidebar =()=>setSidebar(!sidebar);
    return (
        <>
       <IconContext.Provider value={{color:'#fff'}}>
           <div className="navbar">
            <div className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </div>
           </div>
           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <div className='menu-bar'>
                        <AiIcons.AiOutlineClose/>
                    </div>
                </li>
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            {/* <NavLink to={item.path}> */}
                                {item.icon}
                                <span>{item.title}</span>
                            {/* </NavLink> */}
                        </li>
                    )
                })}
            </ul>
           </nav>
          
           </IconContext.Provider>           
        </>
        
    )
}

export default Header
