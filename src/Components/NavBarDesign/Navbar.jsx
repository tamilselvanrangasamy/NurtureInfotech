import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id=""></input>
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <div className="menu-items">
                        <Link className='nav-link' to='/'>Home</Link>   
                        <Link className='nav-link' to='/about'>About</Link>
                        <Link className='nav-link' to='/category'>Courses</Link>
                        <Link className='nav-link' to='/category'>JOB offers</Link>
                        <Link className='nav-link' to='/category'>Gallery</Link>
                        <Link className='nav-link' to='/category'>Enquiry</Link>
                        <Link className='nav-link' to='/category'>Contact</Link>
                        <Link className='nav-link' to='/category'>Career</Link>
                       {/*  <Link className='nav-link' to='/category'>Category</Link>
                        <Link className='nav-link' to='/menu'>Menu</Link>
                        <Link className='nav-link' to='/testimonial'>Testimonial</Link>
                        <Link className='nav-link' to='/contact'>Contact</Link> */}
                    </div>
                    <h1 className="logo tracking-in-expand">Nurture - InfoTech</h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
