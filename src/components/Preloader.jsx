import React, { useEffect, useState } from "react";
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 2500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "100" }}
                    className=" bg-white top-0 min-vh-100 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center"
                >
                    <p className="cloopp position-absolute color-black1 text-center fs-lg pb-5 ff-exo color-gradient fw-bold mb-5">Noble <span className=" color-purple">Mind</span> </p>
                    <div className="loader mt-5 "></div>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader;