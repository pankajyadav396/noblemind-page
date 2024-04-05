import React from 'react'
import image from '../assets/images/webp/eg2.webp'
import { Star } from './common/Icon'
import Commonbtn from './common/Commonbtn'
import ellipse from "../assets/images/png/ellipse.png"
const Pioneer = () => {
    return (
        <>
            <div className='py-5 mt-md-5 position-relative' id='aboutus'>
                <div className=' container-lg pt-lg-5 max-w-1140 '>
                    <div className=' row align-items-center justify-content-center'>
                        <div className='col-md-6 col-sm-10 d-flex align-items-center justify-content-center'>
                            <img src={image} alt="img" className=' w-100 max-w-544' />
                        </div>
                        <div className='col-md-6 mt-4 mt-md-0 ps-lg-5 d-flex align-items-center justify-content-center'>
                            <div className=' d-flex d-md-block align-items-center justify-content-center flex-column'>
                                <div className=' d-flex align-items-center gap-2'>
                                    <Star />
                                    <p className=' m-0 lh-24 ff-exo color-black1 fw-normal fs-sm'>About Us</p>
                                </div>
                                <h2 className='mt-2 mb-0 fw-light text-center text-md-start lh-57 color-black1 ff-outfit fs-lg'>Pioneering Vision & Mission-<span className='fw-semibold'>Driven Sectoral Innovation </span></h2>
                                <p className=' color-black2 pb-3 text-center text-md-start max-w-584 fs-sm3 lg-24 fw-normal mt-3 mb-0'>Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
                                <div className='mt-4'>
                                    <Commonbtn text="Read More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={ellipse} alt="image" className=' position-absolute d-none d-md-block end-0 mb-5 bottom-0 me-5' />
            </div>
        </>
    )
}

export default Pioneer