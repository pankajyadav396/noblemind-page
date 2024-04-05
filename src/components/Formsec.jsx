import { useState } from "react";
import Commonbtn from "./common/Commonbtn";
import img from "../assets/images/webp/ladyimg.webp"
const Formsec = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        lastname: "",
        email: "",
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        };
        const errors = {};
        if (!regex.name.test(formData.name)) {
            errors.name = "Name is invalid.";
        }
        if (!regex.lastname.test(formData.lastname)) {
            errors.lastname = "LastName is invalid.";
        }
        if (!regex.email.test(formData.email)) {
            errors.email = "Email is invalid.";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
    };
    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            name: "",
            lastname: "",
            email: "",
        });
        setFormErrors({
            name: "",
            lastname: "",
            email: "",
        });
    };
    return (
        <>
            <div className='d-flex pb-5 pt-md-5 mt-lg-5' id="services">
                <div className='container-lg max-w-1140 align-items-center d-flex flex-grow-1 justify-content-center'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 col-sm-11 pe-lg-5 pe-3'>
                            <form className="registration-form" onSubmit={handleSubmit}>
                                <h1 className=' mt-2 mb-0 fw-semibold text-center text-md-start color-black1 mb-3 ff-outfit fs-lg'>Contact <span className="fw-light"> Us</span></h1>
                                <div className="d-flex flex-400-column gap-3 mb-3 flex-sm-row form-gap w-100">
                                    <div className="form-group position-relative d-flex flex-column">
                                        <label htmlFor="name" className="color-black2 ff-exo mb-1 fs-sm">Name</label>
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        // className={formErrors.name ? "error" : ""}
                                        />
                                        {formErrors.name && (
                                            <p className="error-message">{formErrors.name}</p>
                                        )}
                                    </div>
                                    <div className="form-group d-flex flex-column position-relative">
                                        <label htmlFor="name" className="color-black2 ff-exo mb-1 fs-sm">Last Name</label>
                                        <input
                                            required
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            value={formData.lastname}
                                            onChange={handleChange}
                                        // className={formErrors.name ? "error" : ""}
                                        />
                                        {formErrors.name && (
                                            <p className="error-message color-black2">{formErrors.lastname}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group d-flex flex-column position-relative w-100">
                                    <label htmlFor="email" className="color-black2 w-100 fs-sm mb-1 ff-exo">Email</label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={formErrors.password ? "error" : ""}
                                    />
                                    {formErrors.email && (
                                        <p className="error-message">{formErrors.email}</p>
                                    )}
                                </div>
                                <div className=" d-flex flex-column">
                                    <label className="mt-3 color-black2 mb-2" >Message</label>
                                    <textarea required></textarea>
                                </div>
                                <div className="text-center mt-3 pt-2 text-md-start">
                                    <Commonbtn text="Submit" />
                                </div>
                            </form>
                            {showSuccessPopup && (
                                <div className="success-popup">
                                    <p className="color-white">Form submitted successfully!</p>
                                    <button onClick={handlePopupClose}>Close</button>
                                </div>
                            )}
                        </div>
                        <div className='col-md-6 col-sm-11 d-flex align-items-center mt-4 mt-md-0 justify-content-center'>
                            <img src={img} alt="" className=" w-100 max-w-651" />
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Formsec