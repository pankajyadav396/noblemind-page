import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ellipse from "../assets/images/png/ellipse.png"

const Faqs = () => {
    return (
        <>
            <div className='py-sm-5 mt-lg-5 position-relative' id='faqs'>
                <img src={ellipse} alt="image" className=' position-absolute top-0 d-none d-sm-block start-0 ms-4' />
                <img src={ellipse} alt="image" className=' position-absolute top-50 bottom-50 end-0  me-4 d-none d-lg-block' />
                <div className='container-md'>
                    <h1 className=' mt-2 mb-0 fw-light color-black1 mb-3 ff-outfit fs-lg text-center'>Frequently <span className="fw-semibold">  Asked Questions</span></h1>
                    <p className=' color-black2 max-w-584 ff-exo fs-sm lg-24 fw-normal mt-3 mb-0 text-center mx-auto mb-5'>Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu volutpat mi leo. Nibh nisl consequat metus.</p>
                    <Accordion defaultActiveKey="0" className=' gap-4 border-0 max-w-774 mx-auto'>
                        <Accordion.Item eventKey="0" className=' mb-3'>
                            <Accordion.Header className=' fs-sm fw-medium color-grey ff-outfit'>What is Artificial Intelligence (AI)?</Accordion.Header>
                            <Accordion.Body className='color-black2 fs-sm ff-exo pt-0'>
                                Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className=' mb-3'>
                            <Accordion.Header className='fs-sm fw-medium color-grey ff-outfit'>How does AI benefit our company?</Accordion.Header>
                            <Accordion.Body className='color-black2 fs-sm ff-exo pt-0'>
                                Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className=' mb-3'>
                            <Accordion.Header className='fs-sm fw-medium color-grey ff-outfit'>What types of AI technologies are relevant to our industry?</Accordion.Header>
                            <Accordion.Body className='color-black2 fs-sm ff-exo pt-0'>
                                Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className=' mb-3'>
                            <Accordion.Header className='fs-sm fw-medium color-grey ff-outfit'>How can our employees adapt to AI integration?</Accordion.Header>
                            <Accordion.Body className='color-black2 fs-sm ff-exo pt-0'>
                                Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className=' mb-3'>
                            <Accordion.Header className='fs-sm fw-medium color-grey ff-outfit'>How can our company ensure data security with AI?</Accordion.Header>
                            <Accordion.Body className='color-black2 fs-sm ff-exo pt-0'>
                                Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Faqs