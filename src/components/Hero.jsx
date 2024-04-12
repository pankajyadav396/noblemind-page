import React from 'react'
import Navsec from './Navsec'
import { Star } from './common/Icon'
import ellipse from "../assets/images/png/ellipse.png"
const Hero = () => {
    return (
        <>
            <div className='bg-header d-flex flex-column position-relative' id='home'>
                <img src={ellipse} alt="image" className=' position-absolute d-none d-sm-block start-0 ellipse1 ms-4' />
                <Navsec />
                <div data-aos="zoom-in" data-aos-delay="2000" className=' container-lg max-w-1140 h-100 flex-grow-1 d-flex flex-column align-items-start justify-content-center'>
                    <div className=' d-flex align-items-center gap-2'>
                        <Star />
                        <p  className=' m-0 lh-24 ff-exo color-black1 fw-normal fs-sm'>AI With Noble Mind</p>
                    </div>
                    <h1 className=' mt-2 mb-0 fw-light color-black1 lh-76 ff-outfit fs-xl'>Inspiring Innovation, <span className='d-block'>Elevating Solutions –</span> <span className=' d-sm-block lh-70 fs-lg ff-montserrat fw-semibold'>Noble Mind"</span></h1>
                    <p className=' color-black2 max-w-584 ff-exo fs-sm lg-24 fw-normal mt-3 mb-0'>At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
                </div>
            </div>
        </>
    )
}

export default Hero