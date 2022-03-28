import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

function Navbar() {
    const [nav,setnav] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        } 
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='home' className='logo' smooth={true} duration={1000}>
                <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='home' smooth={true} duration={1000}>HOME</Link></li>
                <li><Link to='about' smooth={true} duration={1000}>ABOUT</Link></li>
                <li><Link to='projects' smooth={true} duration={1000}>PROJECTS</Link></li>
                <li><Link to='members' smooth={true} duration={1000}>MEMBERS</Link></li>
                <li><Link to='events' smooth={true} duration={1000}>EVENTS</Link></li>
                <li><Link to='registrations' smooth={true} duration={1000}>REGISTRATIONS</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
