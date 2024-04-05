import React, { useState } from 'react'
import logo from '../assets/images/webp/logo.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Commonbtn from './common/Commonbtn';
const Navsec = () => {
    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classList.add("overflow-max-hidden")
            document.getElementById('menu').classList.add("menu-opened");
        }
        else {
            document.body.classList.remove("overflow-max-hidden")
            document.getElementById('menu').classList.remove("menu-opened");

        }
    };
    return (
        <>
            <div className='h-90 w-100 d-flex align-items-center'>
                <div className='h-100 container-lg max-w-1140 justify-content-between d-flex align-items-center'>
                    <img src={logo} alt="image" className='cursor-pointer logo d-inline' />
                    <div className='d-flex gap-4 align-items-center'>
                        <ul className={`${nav ? "open" : "not-open"
                            } d-flex justify-content-center align-items-center m-0 p-0 gap-4 mobileView`}>
                            <li><a onClick={show} href="#home" className='home fs-sm fw-normal ff-exo lh-24 text-decoration-none list-unstyled'>Home</a></li>
                            <li><a onClick={show} href="#aboutus" className='home fs-sm fw-normal ff-exo lh-24 text-decoration-none list-unstyled'>About Us</a></li>
                            <li><a onClick={show} href="#services" className='home fs-sm fw-normal ff-exo lh-24 text-decoration-none list-unstyled'>Services</a></li>
                            <li><a onClick={show} href="#choose" className='home fs-sm fw-normal ff-exo lh-24 text-decoration-none list-unstyled'>Why Choose Us</a></li>
                            <li><a onClick={show} href="#blogs" className='home fs-sm fw-normal ff-exo lh-24 text-decoration-none list-unstyled'>Blogs</a></li>
                            <li><a onClick={show} href="#faqs" className='home fs-sm fw-normal ff-exo lh-24 text-decoration-none list-unstyled'>FAQ</a></li>
                            <li onClick={show} className='ms-2 d-sm-none'><Commonbtn text="Contact Us" /></li>
                        </ul>
                        <li className='ms-2 d-none d-sm-block'><Commonbtn text="Contact Us" /></li>
                        <label className='cursor-pointer' id='menu' onClick={show}>
                            {nav ? (
                                <div id='menu' className='relative z-40'>
                                    <span className=' span1'></span>
                                    <span className=' span2'></span>
                                    <span className=' span3'></span>
                                </div>
                            ) : (
                                <div className='relative z-40'>
                                    <span className=' span4'></span>
                                    <span className='span5'></span>
                                    <span className=' span6'></span>
                                </div>
                            )}
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navsec