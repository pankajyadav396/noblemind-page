import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Icon1, Icon2, Icon3, Star } from './common/Icon';
import img2 from '../assets/images/webp/manboard.webp'
import ellipse from '../assets/images/png/ellipse.png'
const Swipersec = () => {
    const array = [
        {
            svg: <Icon1 />,
            title: "Customer-Centric",
            title2: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value."
        },
        {
            svg: <Icon2 />,
            title: "Workplace Harmony",
            title2: "Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family."
        },
        {
            svg: <Icon3 />,
            title: "Ethical Leadership",
            title2: "Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent."
        },
        {
            svg: <Icon1 />,
            title: "Customer-Centric",
            title2: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value."
        },
    ]
    return (
        <>
            <div className='pt-sm-5 pb-5 position-relative' id='choose'>
                <img src={ellipse} alt="imge" className=' position-absolute top-0 start-0 ms-5 mt-5' />
                <img src={ellipse} alt="imge" className=' position-absolute bottom-0 end-0 me-5 mb-5 d-none d-xxl-block' />
                <div className='container max-w-1140'>
                    <div className=' d-flex justify-content-center align-items-center gap-2'>
                        <Star />
                        <p className=' m-0 lh-24 ff-exo color-black1 fw-normal fs-sm'>Why Choose Us</p>
                    </div>
                    <h2 className='mt-2 mb-0 fw-light lh-57 mb-5 text-center color-black1 ff-outfit fs-lg'>Driving Innovation & <span className='d-block fw-semibold'>Transforming Industries</span></h2>
                    <Swiper breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                        pagination={{ clickable: true }} modules={[Pagination]} centeredSlides={true} spaceBetween={24} loop={true} slidesPerView={1} className="mySwiper pb-5">
                        {
                            array.map((obj, index) => {
                                return (
                                    <SwiperSlide>
                                        <div className=' swiper-card'>
                                            <div className='mb-1'>{obj.svg}</div>
                                            <p className=' color-black1 mb-0 mt-2 fs-sm2 ff-outfit'>{obj.title}</p>
                                            <p className=' color-black2 fs-sm ff-exo'>{obj.title2}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper >
                    <img src={img2} alt="img" className='w-100 mt-4 img-swiper-sec' />
                </div>
            </div>
        </>
    )
}

export default Swipersec