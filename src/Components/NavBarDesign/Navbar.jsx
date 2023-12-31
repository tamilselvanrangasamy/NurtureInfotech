import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


function Navbar() {
    return (
        <div>
            <div className='bgbanner'>

            </div>
            <header>
                <div className='callicon'>
                    <svg width="26" height="24" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path>
                    </svg>
                   <span className='cellno'>+91 86105 98460</span>
                </div>
                <div className='mapicon'>
                    <svg width="26" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                        <path d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z"></path>
                    </svg>
                    161,Parimalam Complex, Mettur Rd ,Erode

                </div>
                <div className='clockicon'>
                    <svg width="26" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                        <path d="M12 7v5l3 3"></path>
                    </svg>
                    Mon-Sat 10.00 AM - 07.30 PM | Sun 10.00 AM - 5.00 PM

                </div>
                <div className='mediaicons'>
                    <svg  width="24" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"></path>
                    </svg>
                    <svg width="19" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" clip-rule="evenodd"></path>
                        <path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path>
                        <path fill-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5Zm14 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" clip-rule="evenodd"></path>
                    </svg>
                    <svg width="24" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
                    </svg>
                    <svg width="24" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z"></path>
                    </svg>
                    <svg width="24" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z"></path>
                    </svg>

                </div>
            </header>
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
                        <Link className='nav-link' to='/intern'>Courses</Link>
                        <Link className='nav-link' to='/intern'>Internship</Link>
                        <Link className='nav-link' to='/category'>Hiring</Link>
                        <Link className='nav-link' to='/category'>Gallery</Link>
                        <Link className='nav-link' to='/category'>Enquiry</Link>
                        <Link className='nav-link' to='/category'>Contact Us</Link>
                        {/*  <Link className='nav-link' to='/category'>Category</Link>
                        <Link className='nav-link' to='/menu'>Menu</Link>
                        <Link className='nav-link' to='/testimonial'>Testimonial</Link>
                        <Link className='nav-link' to='/contact'>Contact</Link> */}
                    </div>
                    <h1 className="logo tracking-in-expand">Nurture InfoTech</h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
