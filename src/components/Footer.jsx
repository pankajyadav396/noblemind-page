import img from '../assets/images/png/footlogo.png'
import { Facebook, Insta, Linkedin, Twitter } from './common/Icon'

const Footer = () => {
    const year = new Date();
    const y = year.getFullYear();
    return (
        <>
            <div className='bg-black  pt-5'>
                <div className='bb-1'>
                    <div className='max-w-1140 container py-5 mt-5'>
                        <div className='row justify-content-between'>
                            <div className='col-sm-6'>
                                <img src={img} alt="img" />
                                <div>
                                    <p className=' color-white1 fs-sm ff-exo lg-24 fw-normal mb-0 mx-auto mt-3 pt-2'>Follow Us</p>
                                    <div className='d-flex mt-2 gap-3'>
                                        <a className='footer-app' target='_blank' href="https://www.facebook.com/"><Facebook /></a>
                                        <a className='footer-app' target='_blank' href="https://www.instagram.com/"><Insta /></a>
                                        <a className='footer-app' target='_blank' href="https://www.twitter.com/"><Twitter /></a>
                                        <a className='footer-app' target='_blank' href="https://www.linkedin.com/"><Linkedin /></a>
                                    </div>
                                </div>
                            </div>
                            <div className=' col-sm-6 d-flex align-items-sm-end justify-content-sm-end mt-4 mt-sm-0'>
                                <ul className=' d-flex gap-sm-3 gap-2 flex-column p-0'>
                                    <li className=' ff-outfit fw-semibold list-unstyled color-white1 lh-24 fs-sm'>Maine</li>
                                    <li>
                                        <a href="#home" className=' text-decoration-none list-unstyled ff-exo footer-links fw-normal color-white1 opacity-75 lh-24 fs-sm'>Home</a>
                                    </li>
                                    <li>
                                        <a href="#aboutus" className=' text-decoration-none list-unstyled ff-exo footer-links  fw-normal color-white1 opacity-75 lh-24 fs-sm'>About Us</a>
                                    </li>
                                    <li>
                                        <a href="#services" className=' text-decoration-none list-unstyled ff-exo footer-links  fw-normal color-white1 opacity-75 lh-24 fs-sm'>services</a>
                                    </li>
                                    <li>
                                        <a href="#choose" className=' text-decoration-none list-unstyled ff-exo footer-links  fw-normal color-white1 opacity-75 lh-24 fs-sm'>Why Choose Us</a>
                                    </li>
                                </ul>
                                <ul className=' d-flex gap-sm-3 gap-2 flex-column '>
                                    <li className=' ff-outfit fw-semibold list-unstyled color-white1 lh-24 fs-sm'>Legal</li>
                                    <li
                                        className=' cursor-pointer text-decoration-none list-unstyled ff-exo footer-links fw-normal color-white1 opacity-75 lh-24 fs-sm'>Term & Conduction
                                    </li>
                                    <li
                                        className=' cursor-pointer text-decoration-none list-unstyled ff-exo footer-links  fw-normal color-white1 opacity-75 lh-24 fs-sm'>Privacy Policy
                                    </li>
                                    <li>
                                        <a href="#services" className=' text-decoration-none list-unstyled ff-exo footer-links  fw-normal color-white1 opacity-75 lh-24 fs-sm'>Contact</a>
                                    </li>
                                    <li>
                                        <a href="tel:(629)555-0129" className=' cursor-pointer text-decoration-none list-unstyled ff-exo footer-links  fw-normal color-white1 opacity-75 lh-24 fs-sm'>(629) 555-0129</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-center pt-3 pb-4'>
                    <p className=' color-white1 opacity-75 fs-sm ff-exo m-0'>© Copyright <span>{y}</span>  Noble Mind | All rights reserved. </p>
                </div>
            </div>
        </>
    )
}

export default Footer