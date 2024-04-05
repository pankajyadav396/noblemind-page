import React from 'react'

const Commonbtn = (props) => {
    return (
        <button className={`${props.className} color-gradient btn-common fs-sm color-white ff-outfit color-white1 fw-semibold`}
        >{props.text}</button>
    )
}

export default Commonbtn