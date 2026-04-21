import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Pagehelmet from '../Components/Pagehelmet'
import Contactform from '../Components/Contactform'

function Contact() {
    return (
        <div>
            <Pagehelmet pageTitle="Contact Us" />
            <Breadcrumb title="Contact Us" />

            {/*--Contact Section end--*/}
            <section className="contact">
                <div className="container">
                    <div className="contact-inner text-center text-md-start">
                        <div className="row g-md-5 gy-5 align-items-center">
                            <div className="col-lg-4 col-md-5">
                                <div className="contact-event-info p-8 text-white h-100 rounded bg-pink">
                                    <div className="event-venue pb-5">
                                        <h5 className="text-white pb-2">ORIGIN:</h5>
                                        <p className="m-0">India</p>
                                    </div>
                                    <div className="address pb-5">
                                        <h5 className="text-white pb-2">ADDRESS:</h5>
                                        <p className="m-0">Delhi, India-110032</p>
                                    </div>
                                    <div className="reception-info pb-5">
                                        <h5 className="text-white pb-2">TELEPHONE:</h5>
                                        <p className="m-0">Phone: (+91) 921-199-3105</p>
                                    </div>
                                    <div className="ticket-info pb-5">
                                        <h5 className="text-white pb-2">WHATSAPP / EMAIL:</h5>
                                        <p className="m-0">Whatsapp: (+91) 921-199-3105</p>
                                        <p className="m-0">Email: info@nkaglobalexports.com</p>
                                    </div>
                                    <div className="direction-link">
                                        <a>Get Directions</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <div className="contact-form">
                                    <div className="form-title mb-4">
                                        <h2 className="mb-1">Contact <span className="pink">Us</span></h2>
                                        <p>Get in touch with us for any inquiries—we’re here to help.</p>
                                    </div>
                                    <div className="form">
                                        <Contactform />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-direction mt-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7000.808679005676!2d77.283229!3d28.677549!3m2!1i1024!2i768!4f13.1!2m1!1sH-12%20P%20Block%2C%20Panchshell%20Park%2C%20Shahdara%20New%20Delhi%2C%20Delhi%2C%20110032!5e0!3m2!1sen!2sin!4v1762678668078!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/*--Contact Section end--*/}
        </div>
    )
}

export default Contact