import ellipse from "../assets/images/png/ellipse.png"
const Newsletter = () => {
    return (
        <>
            <div className=' position-relative px-sm-3'>
                <img src={ellipse} alt="image" className=' position-absolute top-0 d-none d-sm-block start-0 ms-4' />

                <div className=' container max-w-1140 bg-news'>
                    <h1 data-aos="fade-up" className=' mt-2 mb-0 fw-light color-white1 mb-3 ff-outfit fs-lg text-center'>Subscribe to our <span className="fw-semibold">Newsletter!</span></h1>
                    <p data-aos="fade-up" className=' color-white1 max-w-584 ff-exo fs-sm lg-24 fw-normal mt-2 mb-0 text-center mx-auto mb-4'>Be the first to get exclusive offers and the latest news.</p>
                    <form data-aos="fade-up" className='d-flex justify-content-between bg-form mx-auto'>
                        <input type="email" className='input-news color-white1 ff-outfit' required placeholder='Enter your email' />
                        <button className='btn-subscribe color-white1 ff-outfit fs-sm lh-24 fw-semibold'>Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Newsletter