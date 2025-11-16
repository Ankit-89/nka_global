import React from 'react'
import CountUpBox from '../Components/CountUpBox'
import TestimonialSlider from '../Components/TestimonialSlider '
import Gallery from '../Components/Gallery'
import { Link } from 'react-router-dom'
import Countdown from '../Components/Countdown'

function Home() {
    return (
        <div>
            {/*!-- Bannner section starts --*/}
            <section className="banner position-relative pb-0">
                <div className="overlay">
                </div>
                <div className="container">
                    <div className="inner-banner position-relative text-white ">
                        <div className='row'>
                            {/* <div className="col-lg-6 order-2 order-lg-1">
                                <div className="banner-left text-center pb-lg-5 p-md-0">
                                    <div className="banner-image">
                                        <img src="/assets/images/team/9.png" alt="banner-image" className="w-50" /><br />
                                    </div>
                                    <div className="countdown">
                                        <div id="countdown"
                                            className="countdown-inner d-flex w-100 bg-white p-2 rounded-5 justify-content-center box-shadow position-relative z-2">
                                            <Countdown />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-lg-6 order-1 order-lg-2 bg-grey bg-opacity-25 rounded py-4">
                                <div className="banner-right ms-2 text-center text-lg-start">
                                    <div className="banner-title pb-3">
                                        <h4 className="text-white pb-3">QUALITY <span className="pink">EXPORT</span> WITH CREDIBILITY</h4>
                                        <h1 className="text-white">SMARTER <span className="pink">EXPORTS</span> IN GLOBAL MARKET</h1>
                                    </div>
                                    <div className="banner-event-info pb-3">
                                        <ul className="m-0 ps-0 d-sm-flex justify-content-center justify-content-lg-start list-unstyled">
                                            <li className="pe-2 border-end border-1 border-lightgrey">
                                                <i className="fa  fa-calendar-o pe-1"></i> 22-24 MAY 2024
                                            </li>
                                            <li className="ps-2">
                                                <i className="fa  fa-map-marker pe-1"></i> QUEENBAY MALL 4217 ROAD, USA
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="event-discription">
                                        <p className="pb-4 m-0">Our global network, efficient supply chain, and customer-first approach ensure on-time delivery and long-term partnerships</p>
                                        {/* <div className="banner-button">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <Link to="/Booknow" className="btn me-3 my-1 w-100">PURCHASE TICKET</Link>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <Link to="/Eventlists" className="btn btn2 my-1 w-100">VIEW SCHEDULE</Link>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave overflow-hidden position-absolute w-100 z-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"
                        className="d-block position-relative">
                        <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
                    </svg>
                </div>
            </section>
            {/*--Banner Section end--*/}


            {/*--Overview Section start--*/}
            <section className="overview pb-0">
                <div className="container">
                    <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="overview-left text-center text-lg-start">
                                    <div className="overview-title pb-4">
                                        <p className="mb-1 pink">OVERVIEW</p>
                                        <h2 className="mb-2">GET THE LATEST INFO ABOUT <span className="pink">NKA Global Exports</span></h2>
                                        <p>At NKA Global Exports, we believe in building bridges between producers and markets.
                                            Established with a mission to promote India's agri-business and industrial capabilities worldwide,
                                            we operate as a <b>Merchant Exporter</b> specializing in high-quality
                                            <b> Cereals, Coffee, Tea, Spices, Agro Products, Cotton, and Man-Made Staple Fibres.</b></p>
                                        <p className="mb-2">With years of experience and a team of industry experts,
                                            we manage every stage — from sourcing and quality control to logistics and
                                            compliance — ensuring a smooth export process and customer satisfaction across continents.</p>
                                    </div>
                                    <div className="overview-event-info pb-6 g-4 text-start position-absolute">
                                        <div className="row justify-content-around ">
                                            <div className="col-lg-6 col-md-6">
                                                <a>
                                                    <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                                                        <div className="event-info-icon text-center ">
                                                            <i className="fa fa-map-marker  text-white bg-pink rounded-circle me-3"></i>
                                                        </div>
                                                        <div className="location-info">
                                                            <h5 className="mb-1">Mission</h5>
                                                            <small>To export India’s finest <br />products globally </small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <a>
                                                    <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                                                        <div className="event-info-icon text-center">
                                                            <i className="fa fa-calendar-o  text-white bg-pink rounded-circle me-3"></i>
                                                        </div>
                                                        <div className="time-info">
                                                            <h5 className="mb-1">Vision</h5>
                                                            <small>To become a <b>globally recognized export leader</b></small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="overview-img">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 p-0 ">
                                            <div className="container-img-left mb-2">
                                                <div className="img-left-1 float-end w-lg-80">
                                                    <img className="mb-2 w-100 rounded" src="/assets/images/group/1.jpg" alt="group-image" />
                                                </div>
                                                <div className="img-left-2">
                                                    <img src="/assets/images/group/2.jpg" alt="group-image" className="w-100 rounded" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="container-img-right w-lg-75">
                                                <img src="/assets/images/group/3.jpg" alt="group-image" className="w-100 rounded" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--Overview Section end--*/}

            {/*--Speakers Section Start--*/}
            <section className="speakers">
                <div className="container">
                    <div className="speaker-inner">
                        <div className="speaker-title text-center p-2">
                            <div className="row align-items-center ">
                                <div className="col-lg-6">
                                    <div className="title-content  text-lg-start mb-2">
                                        <p className="mb-1 pink">OUR PRODUCTS</p>
                                        <h2 className="mb-1">EXPORTING <span className="pink">QUALITY</span> DELIVERING <span className="pink">TRUST</span></h2>
                                        <p className="m-0">We take pride in being one of India’s trusted exporters of agricultural and food products — offering a diverse range of <b>cereals, spices, tea, coffee, and pulses.</b></p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="speaker-button text-lg-end">
                                        <Link to="/Speakerlist" className="btn my-2">VIEW MORE PRODUCTS</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sepaker-list text-center text-white">
                            <div className="row">
                                <div className=" col-lg-3 col-md-6 p-2">
                                    <div className="speaker-box  position-relative overflow-hidden text-white">
                                        <img className="speaker-image rounded w-100" src="/assets/images/speakers/s1.png" alt="speaker-image" />
                                        <div className="box-content position-absolute bottom-0 p-4 z-1">
                                            <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail">CEREALS</Link>
                                            </h6>
                                            <span className="speaker-post d-block pb-2">Wheat, Rice, Maize, Barley, and other grains sourced from trusted Indian farms</span>
                                            {/* <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                                {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                                    <li key={i} className="d-inline-block">
                                                        <a href="#" className="rounded d-block">
                                                            <i className={`fa fa-${icon}`}></i>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-3 col-md-6 p-2">
                                    <div className="speaker-box position-relative overflow-hidden">
                                        <img className="speaker-image rounded w-100" src="/assets/images/speakers/s2.png" alt="speaker-image" />
                                        <div className="box-content position-absolute bottom-0 p-4 z-1">
                                            <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail">COFFEE</Link>
                                            </h6>
                                            <span className="speaker-post d-block pb-2">Premium Arabica and Robusta Coffee Beans — known for rich aroma and taste</span>
                                            {/* <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                                {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                                    <li key={i} className="d-inline-block">
                                                        <a href="#" className="rounded d-block">
                                                            <i className={`fa fa-${icon}`}></i>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 p-2">
                                    <div className="speaker-box position-relative overflow-hidden">
                                        <img className="speaker-image rounded w-100" src="/assets/images/speakers/s3.png" alt="speaker-image" />
                                        <div className="box-content position-absolute bottom-0 p-4 z-1">
                                            <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail">SPCIES</Link>
                                            </h6>
                                            <span className="speaker-post d-block pb-2">Authentic Indian spices such as Turmeric, Black Pepper, Cardamom, Cloves, Cumin, Coriander, and Chili</span>
                                            {/* <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                                {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                                    <li key={i} className="d-inline-block">
                                                        <a href="#" className="rounded d-block">
                                                            <i className={`fa fa-${icon}`}></i>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 p-2">
                                    <div className="speaker-box position-relative overflow-hidden">
                                        <img className="speaker-image rounded w-100" src="/assets/images/speakers/s4.png" alt="speaker-image" />
                                        <div className="box-content position-absolute bottom-0 p-4 z-1">
                                            <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail">TEA</Link>
                                            </h6>
                                            <span className="speaker-post d-block pb-2">Premium CTC Tea, Green Tea, and Specialty Blends — known for rich aroma and taste</span>
                                            {/* <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                                {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                                    <li key={i} className="d-inline-block">
                                                        <a href="#" className="rounded d-block">
                                                            <i className={`fa fa-${icon}`}></i>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/*--Speakers Section end--*/}

            {/*--Features Section start--*/}
            <section className="feature text-white position-relative z-0 start-0">
                <div className="overlay z-n1">
                </div>
                <div className="container">
                    <div className="feature-inner">
                        <div className="counter text-center border-bottom border-white border-opacity-25">
                            <div className="inner-counter mb-7">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 p-2">
                                        <div className="counter-box p-2 border-end border-white border-opacity-25">
                                            <CountUpBox end={300} label="Products" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 p-2">
                                        <div className="counter-box p-2 border-end border-white border-opacity-25">
                                            <CountUpBox end={172} label="Countries" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 p-2">
                                        <div className="counter-box p-2 border-end border-white border-opacity-25">
                                            <CountUpBox end={50} label="Awards" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 p-2">
                                        <div className="counter-box p-2 border-opacity-25">
                                            <CountUpBox end={1000} label="Partners" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-lists pt-8">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="feature-box py-7 px-6 rounded text bg-black bg-opacity-25">
                                        <a>
                                            <div className="feature-box-icon mb-4">
                                                <i className="fa fa-address-book-o text-white bg-pink rounded-circle text-center"></i>
                                            </div>
                                            <div className="feature-box-info ">
                                                <h5 className="text-white mb-2">CREDIBILITY & GLOBAL TRUST</h5>
                                                <small>With transparent trade practices, compliance-driven systems,
                                                    and ethical partnerships, we have earned the confidence of clients across continents.</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="feature-box py-7 px-6 rounded  bg-black bg-opacity-25">
                                        <a>
                                            <div className="feature-box-icon mb-4">
                                                <i className="fa fa-comments text-white bg-pink rounded-circle text-center"></i>
                                            </div>
                                            <div className="feature-box-info">
                                                <h5 className="text-white mb-2">INDIAN PRODUCTION STRENGTH</h5>
                                                <small>Our deep relationships with Indian farming communities ensure a steady, sustainable, and high-quality supply chain. Sourcing from major agricultural belts across India.</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                                        <a>
                                            <div className="feature-box-icon mb-4">
                                                <i className="fa fa-desktop text-white bg-pink rounded-circle text-center"></i>
                                            </div>
                                            <div className="feature-box-info">
                                                <h5 className="text-white mb-2">HIGH QUALITY STANDARDS</h5>
                                                <small>We implement a multi-layer quality management system to ensure every shipment meets global standards of purity, safety, and presentation.</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                                        <a>
                                            <div className="feature-box-icon mb-4">
                                                <i className="fa fa-cogs text-white bg-pink rounded-circle text-center"></i>
                                            </div>
                                            <div className="feature-box-info">
                                                <h5 className="text-white mb-2">ACHIEVEMENTS</h5>
                                                <small>Our success story is powered by a clear philosophy — consistent quality, transparent operations, trusted partnerships, and enduring trust.</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                                        <a>
                                            <div className="feature-box-icon mb-4">
                                                <i className="fa fa-gift text-white bg-pink rounded-circle text-center"></i>
                                            </div>
                                            <div className="feature-box-info">
                                                <h5 className="text-white mb-2">DELIVERABLES</h5>
                                                <small>Each shipment is a reflection of our commitment to precision and professionalism. Our deliverables go beyond products — we deliver quality, confidence, and continuity.</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                                        <a>
                                            <div className="feature-box-icon mb-4">
                                                <i className="fa fa-graduation-cap text-white bg-pink rounded-circle text-center"></i>
                                            </div>
                                            <div className="feature-box-info">
                                                <h5 className="text-white mb-2">END-TO-END SOLUTIONS</h5>
                                                <small>With NKA GLOBAL EXPORTS, you don’t just buy a product — you partner with a team that manages every stage of export with expertise and accountability.</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--Features Section end--*/}

            {/*--Partners Section start--*/}
            {/* <section className="partners">
                <div className="container">
                    <div className="partner-inner">
                        <div className="partner-title text-center pb-6 w-lg-60 m-auto">
                            <p className="mb-1 pink">OUR CERTIFICATES</p>
                            <h2 className="mb-1">REGISTRATION AND <span className="pink">CERTIFICATION</span></h2>
                            <p className="m-0">As a trusted <b>Merchant Exporter</b>, we take pride in maintaining the
                                highest standards of quality, compliance, and transparency.</p>
                        </div>
                        <div className="partner-img pb-6">
                            <div className="row row-cols-1 row-cols-lg-5 row-cols-md-5 ">
                                <div className="col p-0 border-end border-sm-0">
                                    <div className="p-2 partner-img-box text-center">
                                        <img src="/assets/images/icon/white-logo.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                                <div className="col p-0 border-end border-sm-0">
                                    <div className="p-2 partner-img-box text-center ">
                                        <img src="/assets/images/icon/2.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                                <div className="col p-0 border-end border-sm-0">
                                    <div className="p-2 partner-img-box text-center">
                                        <img src="/assets/images/icon/3.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                                <div className="col p-0 border-end border-sm-0">
                                    <div className="p-2 partner-img-box text-center">
                                        <img src="/assets/images/icon/4.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                                <div className="col p-0 border-sm-0">
                                    <div className="p-2 partner-img-box text-center">
                                        <img src="/assets/images/icon/5.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                                <div className="col p-0 border-end border-top border-sm-0">
                                    <div className="p-2 partner-img-box text-center">
                                        <img src="/assets/images/icon/3.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                                <div className="col p-0 border-end border-top border-sm-0">
                                    <div className="p-2 partner-img-box text-center">
                                        <img src="/assets/images/icon/4.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                                <div className="col p-0 border-end border-top border-sm-0">
                                    <div className="p-2 partner-img-box text-center ">
                                        <img src="/assets/images/icon/5.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                                <div className="col p-0 border-end border-top border-sm-0">
                                    <div className="p-2 partner-img-box text-center ">
                                        <img src="/assets/images/icon/white-logo.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                                <div className="col p-0 border-top border-0 border-sm-0">
                                    <div className="p-2 partner-img-box text-center border-sm-0">
                                        <img src="/assets/images/icon/2.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="partner-button text-center">
                            <Link to="/Sponsers" className="btn">VIEW ALL CERTIFICATES</Link>
                        </div>
                    </div>
                </div>
            </section> */}
            {/*--Partners Section end--*/}

            {/*--Gallery Section end--*/}
            <section className="gallery">
                <div className="container">
                    <div className="galler-inner">
                        <div className="section-title text-center">
                            <div className="row align-items-center ">
                                <div className="col-lg-6 pb-2">
                                    <div className="title-content  text-lg-start">
                                        <p className="mb-1 pink">OUR GALLERY</p>
                                        <h2 className="mb-1">WAS AN AMAGING <span className="pink">GALLERY</span></h2>
                                        <p className="m-0">Welcome to our gallery — a glimpse into the world of premium-quality Indian cereals,
                                            aromatic spices, rich teas, flavorful coffees, and wholesome pulses that we proudly export across continents.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="speaker-button text-lg-end">
                                        <Link to="/Ourgallery" className="btn">VIEW MORE SHOTS</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Gallery />
                    </div>
                </div>
            </section>
            {/*--Gallery Section end--*/}

            {/*--Ticketbook Section start--*/}
            <section className="ticket position-relative">
                <div className="overlay">
                </div>
                <div className="container">
                    <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
                        <div className="ticket-title">
                            <h5 className="text-white mb-1">LET'S DO IT HURRY</h5>
                            <h1 className="text-white mb-2">SUSTAINABLE GLOBAL EXPORT TRADE <span className='pink'>Get Partner</span>
                            </h1>

                        </div>
                        <div className="ticket-info">
                            <p>We believe in building bridges between producers and markets. Established with a mission to promote India’s agri-business and industrial capabilities worldwide.</p>
                            <div className="ticket-button">
                                <Link to="/Booknow" className="btn">GET IN TOUCH</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--Ticketbook Section end--*/}

            {/*--Schedules Section start--*/}
            {/* <section className="schedules">
                <div className="container">
                    <div className="schedule-inner">
                        <div className="schedule-title text-center mb-6 w-lg-60 mx-auto">
                            <p className="mb-1 pink">OUR SCHEDULES</p>
                            <h2 className="mb-1">FOLLOW <span className="pink">EVENT</span> SCHEDULES</h2>
                            <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                                mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="schedule-list-outer">
                            <div className="schedule-list-top mb-7">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                                            <h4 className="pink mb-2">1ST DAY</h4>
                                            <h6 className="mb-2">APRIL 23, 2024</h6>
                                            <p>William Mathew Theater<br />
                                                2390 NW 2nd Ave, Miami, FL 33127</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-8">
                                        <div className="schedule-list  text-center text-sm-start">
                                            <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                                                <div className="schedule-box-title">
                                                    <h5 className="mb-2"><Link to="/Eventdetail" className="black">REGISTRATION & BREAKFAST</Link></h5>
                                                </div>
                                                <div className="schedule-box-info">
                                                    <p className="mb-2"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                        luctus nec ullamcorper mattis, pulvinar dapibus leo, luctus nec ullamcorper mattis, pulvinar
                                                        dapibus leo.</small></p>
                                                    <ul className="mb-2 p-0">
                                                        <li className="d-inline"><i className="fa fa-clock-o pink me-2" aria-hidden="true"></i><small>08:30 -
                                                            09:30 AM</small></li>
                                                        <li className="d-inline"><i className="fa fa-thumb-tack pink mx-2"
                                                            aria-hidden="true"></i><small>Exploration Hall</small></li>
                                                    </ul>
                                                </div>
                                                <div className="schedule-box-bio d-md-flex">
                                                    <div className="schedule-bio-image ">
                                                        <img src="/assets/images/team/1.jpg" alt="team-image" className="me-2 rounded-circle" />
                                                    </div>
                                                    <div className="schedule-bio-info">
                                                        <p className="mt-1 mb-0"><Link to="/Eventdetail" className="pink">JESUS HOLLAND</Link></p>
                                                        <small>Host & Speaker</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" schedule-list-box bg-white border-lightgrey border border-2 rounded px-6 py-4">
                                                <div className="schedule-box-title">
                                                    <h5 className="mb-2"><Link to="/Eventdetail" className="black">SPEED: MARKETING MASTER!</Link></h5>
                                                </div>
                                                <div className="schedule-box-info">
                                                    <p className="mb-2"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                        luctus nec ullamcorper mattis, pulvinar dapibus leo, luctus nec ullamcorper mattis, pulvinar
                                                        dapibus leo.</small></p>
                                                    <ul className="mb-2 p-0">
                                                        <li className="d-inline"><i className="fa fa-clock-o pink me-2" aria-hidden="true"></i><small>08:30 -
                                                            09:30 AM</small></li>
                                                        <li className="d-inline"><i className="fa fa-thumb-tack pink mx-2"
                                                            aria-hidden="true"></i><small>Exploration Hall</small></li>
                                                    </ul>
                                                </div>
                                                <div className="schedule-box-bio d-md-flex">
                                                    <div className="schedule-bio-image">
                                                        <img src="/assets/images/team/2.jpg" alt="team-image" className="me-2 rounded-circle" />
                                                    </div>
                                                    <div className="schedule-bio-info">
                                                        <p className="mt-1 mb-0"><Link to="/Eventdetail" className="pink">NELSON KETY</Link></p>
                                                        <small>Host & Speaker</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-title-bottom">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="schedule-day text-center position-relative text-sm-start py-6 ps-2 z-1">
                                            <h4 className=" pink mb-2">2ND DAY</h4>
                                            <h6 className="mb-2">APRIL 24, 2024</h6>
                                            <p>William Mathew Theater<br />
                                                2390 NW 2nd Ave, Miami, FL 33127</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-8">
                                        <div className="schedule-list text-center text-sm-start">
                                            <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                                                <div className="schedule-box-title">
                                                    <h5 className="mb-2"><Link to="/Eventdetail" className="black">REGISTRATION & BREAKFAST</Link></h5>
                                                </div>
                                                <div className="schedule-box-info">
                                                    <p className="mb-2"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                        luctus nec ullamcorper mattis, pulvinar dapibus leo, luctus nec ullamcorper mattis, pulvinar
                                                        dapibus leo.</small></p>
                                                    <ul className="mb-2 p-0">
                                                        <li className="d-inline"><i className="fa fa-clock-o pink me-2" aria-hidden="true"></i><small>08:30 -
                                                            09:30 AM</small></li>
                                                        <li className="d-inline"><i className="fa fa-thumb-tack pink mx-2"
                                                            aria-hidden="true"></i><small>Exploration Hall</small></li>
                                                    </ul>
                                                </div>
                                                <div className="schedule-box-bio d-md-flex">
                                                    <div className="schedule-bio-image">
                                                        <img src="/assets/images/team/3.jpg" alt="team-image" className="me-2 rounded-circle" />
                                                    </div>
                                                    <div className="schedule-bio-info">
                                                        <p className="mt-1 mb-0"><Link to="/Eventdetail" className="pink">PEELRS HELM</Link></p>
                                                        <small>Host & Speaker</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" schedule-list-box bg-white border-lightgrey border border-2 rounded px-6 py-4 mb-5">
                                                <div className="schedule-box-title">
                                                    <h5 className="mb-2"><Link to="/Eventdetail" className="black">EXPLORATIONS OF NEW APPROACHES</Link></h5>
                                                </div>
                                                <div className="schedule-box-info">
                                                    <p className="mb-2"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                        luctus nec ullamcorper mattis, pulvinar dapibus leo, luctus nec ullamcorper mattis, pulvinar
                                                        dapibus leo.</small></p>
                                                    <ul className="mb-2 p-0">
                                                        <li className="d-inline"><i className="fa fa-clock-o pink me-2" aria-hidden="true"></i><small>08:30 -
                                                            09:30 AM</small></li>
                                                        <li className="d-inline"><i className="fa fa-thumb-tack pink mx-2"
                                                            aria-hidden="true"></i><small>Exploration Hall</small></li>
                                                    </ul>
                                                </div>
                                                <div className="schedule-box-bio d-md-flex">
                                                    <div className="schedule-bio-image">
                                                        <img src="/assets/images/team/1.jpg" alt="team-image" className="me-2 rounded-circle" />
                                                    </div>
                                                    <div className="schedule-bio-info">
                                                        <p className="mt-1 mb-0 pink"><Link to="/Eventdetail" className="pink">JESUS HOLLAND</Link></p>
                                                        <small>Host & Speaker</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="partner-button mt-6">
                                                <Link to="/Eventlists" className="btn">VIEW MORE DETAILS</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/*--Schedules Section end--*/}

            {/*--Pricing Section start--*/}
            {/* <section className="price bg-lightgrey">
                <div className="container">
                    <div className="price-inner text-center">
                        <div className="price-title mb-7 w-lg-60 m-auto">
                            <p className="mb-1 pink">PRICING TABLE</p>
                            <h2 className="mb-1">EXPLORE FLEXIBLE <span className="pink">PRICING</span> PLANS</h2>
                            <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.</p>
                        </div>
                        <div className="price-options g-2 pb-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="ticket-box">
                                        <div className="ticket-box-inner bg-white position-relative rounded-bottom-5">
                                            <img src="/assets/images/pattern/white-logo.png" alt="pattern" className="w-100 pattern position-absolute rounded-top" />
                                            <div className="ticket-title">
                                                <h4 className="pt-6  mb-1">BASIC TICKET</h4>
                                                <p>Stander Package</p>
                                            </div>
                                            <div className="ticket-price bg-white py-6">
                                                <div className="ticket-price-inner d-flex justify-content-center align-items-start black fw-bold">
                                                    <span className="me-1 mb-0 currency">$</span>
                                                    <span className="me-1 m-0 dollor">19</span>
                                                    <span className="me-1 mb-0 cents">99</span>
                                                </div>
                                                <p className="m-0">Person</p>
                                            </div>
                                            <div className="benifit-list bg-white px-5">
                                                <ul className="m-auto p-0 list-unstyled">
                                                    <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                                                        <p className="my-1"><small>Second Balcony Seat</small></p>
                                                    </li>
                                                    <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                                                        <p className="my-1"><small>Snack & software</small></p>
                                                    </li>
                                                    <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                                                        <p className="my-1"><small>Certificates</small></p>
                                                    </li>
                                                    <li className="pt-2 border border-0 text-capitalize lh-1">
                                                        <p className="my-1"><small>Private access</small></p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ticket-button  m-auto p-6">
                                                <Link to="/Pricing" className="btn">PURCHASE</Link>
                                                <p className="mt-4"><small>*Please read our term and condition before order ticket</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="ticket-box-inner bg-white position-relative rounded-bottom-5">
                                        <img src="/assets/images/pattern/2.png" alt="pattern" className="w-100 pattern position-absolute rounded-top" />
                                        <div className="ticket-title py-6 bg-pink text-white ">
                                            <h4 className="text-white  mb-1">SILVER TICKET</h4>
                                            <p>Pro Package</p>
                                        </div>
                                        <div className="ticket-price bg-white py-6">
                                            <div className="ticket-price-inner d-flex justify-content-center align-items-start fw-bold">
                                                <span className="me-1 mb-0 currency pink">$</span>
                                                <span className="me-1 m-0 dollor pink">39</span>
                                                <span className="me-1 mb-0 cents pink">99</span>
                                            </div>
                                            <p className="m-0">Person</p>
                                        </div>
                                        <div className="benifit-list bg-white">
                                            <ul className=" m-auto p-0 list-unstyled">
                                                <li className="pb-2 border border-0 text-capitalize lh-1">
                                                    <p className="my-1"><small>Second Balcony Seat</small></p>
                                                </li>
                                                <li className="py-2 border border-0 text-capitalize lh-1">
                                                    <p className="my-1"><small>Snack & software</small></p>
                                                </li>
                                                <li className="py-2 border border-0 text-capitalize lh-1">
                                                    <p className="my-1"><small>Certificates</small></p>
                                                </li>
                                                <li className="py-2 border border-0 text-capitalize lh-1">
                                                    <p className="my-1"><small>Private access</small></p>
                                                </li>
                                                <li className="pt-2 border border-0 text-capitalize lh-1">
                                                    <p className="my-1"><small>Printed material</small></p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="partner-button  m-auto p-6">
                                            <Link to="/Pricing" className="btn">PURCHASE</Link>
                                            <p className="mt-4"><small>*Please read our term and condition before order ticket</small></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="ticket-box-inner  bg-white position-relative rounded-bottom-5">
                                        <img src="/assets/images/pattern/white-logo.png" alt="pattern" className="w-100 pattern position-absolute rounded-top" />
                                        <div className="ticket-title">
                                            <h4 className="pt-6 mb-1">GOLDEN TICKET</h4>
                                            <p>Enterprise Package</p>
                                        </div>
                                        <div className="ticket-price bg-white py-6">
                                            <div className="ticket-price-inner d-flex justify-content-center align-items-start black fw-bold">
                                                <span className="me-1 mb-0 currency">$</span>
                                                <span className="me-1 m-0 dollor">199</span>
                                                <span className="me-1 mb-0 cents">99</span>
                                            </div>
                                            <p className="m-0">Person</p>
                                        </div>
                                        <div className="benifit-list bg-white px-5">
                                            <ul className=" m-auto p-0 list-unstyled">
                                                <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                                                    <p className="my-1"><small>Second Balcony Seat</small></p>
                                                </li>
                                                <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                                                    <p className="my-1"><small>Snack & software</small></p>
                                                </li>
                                                <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                                                    <p className="my-1"><small>Certificates</small></p>
                                                </li>
                                                <li className="pt-2 border border-0 text-capitalize lh-1">
                                                    <p className="my-1"><small>Private access</small></p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="partner-button  m-auto p-5">
                                            <Link to="/Pricing" className="btn">PURCHASE</Link>
                                            <p className="mt-4"><small>*Please read our term and condition before order ticket</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="m-0">All prices exclude 25% VAT. For more details, view our <a href="" className="pink">Terms & Policy</a></p>
                    </div>
                </div>
            </section> */}
            {/*--Pricing Section end--*/}

            {/*--Testimonials Section start--*/}
            <section className="testimonial bg-lightgrey">
                <div className="container">
                    <div className="section-title w-lg-60 m-auto text-center pb-5">
                        <p className="mb-1  pink">OUR TESTIMONIALS</p>
                        <h2 className="mb-1">WHAT PEOPLES'S SAYS ABOUT <span className="pink">NKA Global Exports</span></h2>
                        <p className="m-0">Trusted Worldwide for Quality, Consistency & Integrity.
                        </p>
                    </div>
                    <TestimonialSlider />
                </div>
            </section>
            {/*--Testimonials Section end--*/}

            {/*--FAQ Section start--*/}
            <section className="faq pb-0 overflow-visible d-block position-relative z-1">
                <div className="overlay bg-blue opacity-25 z-n1">
                </div>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-lg-6 px-4 mb-2">
                                <div className="faq-general">
                                    <div className="section-title pb-3 text-center text-lg-start">
                                        <p className="mb-1 pink">GENERAL QUESTIONS</p>
                                        <h2 className="mb-2 text-white">FREQUENT ASKED <span className="pink">QUESTIONS!!</span></h2>
                                        <p className="text-white">India’s diverse climate, fertile soil, and traditional farming practices make it ideal for producing a wide range of cereals and spices</p>
                                    </div>
                                    <div className="faq-accordion p-4 mb-5 bg-white rounded">
                                        <div className="accordion accordion-faq" id="accordionFlushExample">
                                            <div className="accordion-item ">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed fw-semibold p-0" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        Why is India known as a global supplier of cereals and spices?
                                                    </button>
                                                </p>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body bg-lightgrey p-6">India’s diverse climate, fertile soil, and traditional farming practices make it ideal for producing a wide range of cereals and spices. Additionally, India is:
                                                        <ul>
                                                            <li>The largest producer and exporter of many spices.</li>
                                                            <li>Renowned for Basmati rice and high-aroma varieties.</li>
                                                            <li>Backed by government export bodies like APEDA and Spices Board of India ensuring quality and traceability.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed  fw-semibold p-0" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                        aria-controls="flush-collapseTwo">
                                                        How is the quality of export products ensured?
                                                    </button>
                                                </p>
                                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body bg-lightgrey p-6">Before shipment, all products undergo:
                                                        <ul>
                                                            <li>Sourcing from certified and reliable farms or processors</li>
                                                            <li>Laboratory testing for purity, moisture content, and pesticide residue</li>
                                                            <li>Proper cleaning, grading, and packaging</li>
                                                            <li>Third-party inspection (e.g., SGS, BV, or Intertek) as per buyer requirements</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed fw-semibold p-0" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                        How long does it take to process and ship an export order?
                                                    </button>
                                                </p>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body bg-lightgrey p-6">
                                                        The typical processing and dispatch timelines are:

                                                        <ul>
                                                            <li><b>Sample orders:</b> 5–7 days</li>
                                                            <li><b>Bulk orders:</b> 2–4 weeks, depending on product availability and port clearance</li>
                                                        </ul>
                                                        Shipping time varies based on destination — from 7 days (air freight) to 30–40 days (sea freight).
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  align-self-center px-4">
                                <div className="faq-form bg-white rounded shadow-lg p-6 mb-mi">
                                    <div className="form-title mb-4">
                                        <p className="mb-1 pink">GET IN TOUCH</p>
                                        <h2 className="mb-2">WE'RE HERE FOR <span className="pink">YOU</span></h2>
                                        <p className="m-0">For overseas buyers and business collaborations, please include:</p>
                                    </div>
                                    <div className="form-content justify-content-between">
                                        <form>
                                            <input type="text" placeholder="Full Name" className="mb-5" />
                                            <div className=" row justify-content-around">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="phone-no">
                                                        <input type="tel" placeholder="Phone No." className="mb-5" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="emai">
                                                        <input type="email" placeholder="Email Address" className="mb-5" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <textarea placeholder="How may we help you?" rows="4" className="mb-5"></textarea>
                                            <button className="btn mb-5" id="sub-btn">SEND MESSAGE</button>
                                        </form>
                                        <small>*Our export team will get back to you within 24–48 hours with complete details and a competitive quotation.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--FAQ Section end--*/}

            {/*--Direction Section start--*/}
            <section className="direction pb-0">
                <div className="container">
                    <div className="section-title text-center pb-2 w-lg-60 m-auto">
                        <p className="mb-1  pink">REACH US</p>
                        <h2 className="mb-1">WE ARE HERE TO CONNECT THE WORLD WITH <span className="pink">INDIAN EXCELLENCE</span></h2>
                        <p className="mb-0">Get in touch with NKA Global Exports — your trusted partner for global
                            sourcing and export of Indian agro and textile products
                        </p>
                    </div>
                    <div className="direction-content">
                        <div className="direction-info">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 px-1">
                                    <div className="p-6 d-flex text-white w-100 h-100 rounded bg-pink ">
                                        <div className="justify-content-center align-self-center ms-6">
                                            <h5 className="text-white pb-2">LEGAL NAME:</h5>
                                            <p className="pb-5 m-0">NKA GLOBAL EXPORTS</p>
                                            <h5 className="text-white pb-2">ADDRESS:</h5>
                                            <p className="pb-5 m-0">H-12, 1st Floor, Naveen Shahdara, Delhi - 110032</p>
                                            <h5 className="text-white pb-2">RECEPTION INFO:</h5>
                                            <p className="pb-5 m-0">Contact: (+91) 9211993105</p>
                                            <a>Get Directions</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 px-1 py-2">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7000.808679005676!2d77.283229!3d28.677549!3m2!1i1024!2i768!4f13.1!2m1!1sH-12%20P%20Block%2C%20Panchshell%20Park%2C%20Shahdara%20New%20Delhi%2C%20Delhi%2C%20110032!5e0!3m2!1sen!2sin!4v1762678668078!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="location-gallery">
                            <div id="selector" className="row pt-1 justify-content-center">
                                <div className="item col-lg-4 col-md-6 p-1" data-src="images/group/4.jpg">
                                    <a><img src="/assets/images/thumbnail/s2.png" className="w-100 rounded" alt="VR Presentation and conference" /></a>
                                </div>
                                <div className="item col-lg-4 col-md-6 p-1" data-src="images/group/7.jpg">
                                    <a><img src="/assets/images/thumbnail/s7.jpg" className="w-100 rounded" alt="VR Presentation and conference" /></a>
                                </div>
                                <div className="item col-lg-4 col-md-6 p-1" data-src="images/group/1.jpg">
                                    <a><img src="/assets/images/thumbnail/s1.jpg" className="w-100 rounded" alt="VR Presentation and conference" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--Direction Section end--*/}

            {/*--Blog Section start--*/}
            {/* <section className="blog">
                <div className="container">
                    <div className="blog-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6  ">
                                <div className="blog-title text-center text-lg-start p-2">
                                    <p className="mb-1 pink">RECENT NEWS</p>
                                    <h2 className="mb-1">READ MY <span className="pink">NEWS </span>TO KNOW MORE</h2>
                                    <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                        anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-lg-6  p-2">
                                <div className="blog-button text-center text-lg-end">
                                    <Link to="/Blogsingle" className="btn">VIEW MORE</Link>
                                </div>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="row">
                                <div className=" col-lg-4 p-4 pb-0">
                                    <div className="blog-box border border-1 rounded pb-2 text-center ">
                                        <Link to="/Blogsingle"><img className="blog-img rounded rounded-bottom-0 w-100 h-auto" src="/assets/images/group/6.jpg" alt="blog-img" /></Link>
                                        <h5 className="p-4"><Link to="/Blogsingle" className="black">THE TOP MUSIC FESTIVAL IN NEW YORK CITY</Link></h5>
                                        <p className="p-4 pt-0 m-0 border-bottom"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do</small></p>
                                        <div className="pt-2">
                                            <span className="px-4  border-end ">April 3, 2023 </span><span className="px-4">No Comments </span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-4  p-4 pb-0">
                                    <div className="blog-box border border-1 rounded pb-2 text-center">
                                        <Link to="/Blogsingle"><img className="blog-img rounded w-100 rounded-bottom-0 h-auto" src="/assets/images/group/7.jpg" alt="blog-img" /></Link>
                                        <h5 className="p-4"><Link to="/Blogsingle" className="black">LIVE INTERVIEWS FROM CONFERENCE</Link></h5>
                                        <p className="p-4 pt-0 m-0 border-bottom"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do</small></p>
                                        <div className="pt-2">
                                            <span className="px-4  border-end ">April 3, 2023 </span><span className="px-4">No Comments </span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-4 p-4 pb-0 ">
                                    <div className="blog-box border border-1 rounded pb-2 text-center">
                                        <Link to="/Blogsingle"><img className="blog-img rounded rounded-bottom-0 w-100 h-auto" src="/assets/images/group/4.jpg" alt="blog-img" /></Link>
                                        <h5 className="p-4"><Link to="/Blogsingle" className="black">REGISTRATION FOR OPENING WORKSHOP</Link></h5>
                                        <p className="p-4 pt-0 m-0 border-bottom"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do</small></p>
                                        <div className="pt-2">
                                            <span className="px-4  border-end ">April 3, 2023 </span><span className="px-4">No Comments </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/*--Blog Section end--*/}

        </div >
    )
}

export default Home