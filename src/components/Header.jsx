import React, { useState } from 'react'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { IconContext } from 'react-icons'
import Dashboard from './Dashboard'
import * as IoIcons from 'react-icons/io'
// import './Stylling.css'
import profile_pic from '../Images/profile_pic.png'
const Header = () =>{
    const [sidebar,setSidebar]=useState(false)
    const showSidebar =()=>setSidebar(!sidebar);
    return (
        <>
       <IconContext.Provider value={{color:'#fff'}}>``
           <div className="navbar">
            <Link to='/' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
           </div>
           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='/' className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                <img src={profile_pic} className='profilepic'/>
                <hr/>
                {SidebarData.map((item,index)=>{
           return(
    <li key={index} className={item.cName}>
        <Link exact to={item.path}>
            
            {item.icon}
            <span>{item.title}</span>
        </Link>
        
    </li>
)
                })}
                <hr/>
                <Link to='/' className='nav-text '>
                        <IoIcons.IoIosLogOut/>
                        <span>Log Out</span>
                    </Link>
            </ul>
           
            
           </nav>
       
           </IconContext.Provider>           
        </>
        
    )
}

export default Header


// return(
//     <li key={index} className={item.cName}>
//         <Link exact to={item.path}>
            
//             {item.icon}
//             <span>{item.title}</span>
//         </Link>
//     </li>
// )