import React from "react";

const OverviewSection = () => {
  return (
    <section className="overview pb-0">
      <div className="container">
        <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="overview-left text-center text-lg-start">
                <div className="overview-title pb-4">
                  <p className="mb-1 pink">OVERVIEW</p>
                  <h2 className="mb-2">
                    GET THE LATEST INFO ABOUT{" "}
                    <span className="pink">NKA Global Exports</span>
                  </h2>
                  <p>
                    At NKA Global Exports, we believe in building bridges
                    between producers and markets. Established with a mission to
                    promote India's agri-business and industrial capabilities
                    worldwide, we operate as a <b>Merchant Exporter</b>{" "}
                    specializing in high-quality
                    <b>
                      {" "}
                      Cereals, Coffee, Tea, Spices, Agro Products, Cotton, and
                      Man-Made Staple Fibres.
                    </b>
                  </p>
                  <p className="mb-2">
                    With years of experience and a team of industry experts, we
                    manage every stage — from sourcing and quality control to
                    logistics and compliance — ensuring a smooth export process
                    and customer satisfaction across continents.
                  </p>
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
                            <small>
                              To export India’s finest <br />
                              products globally{" "}
                            </small>
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
                            <small>
                              To become a{" "}
                              <b>globally recognized export leader</b>
                            </small>
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
                        <img
                          className="mb-2 w-100 rounded"
                          src="/assets/images/group/1.jpg"
                          alt="group-image"
                          loading="lazy"
                        />
                      </div>
                      <div className="img-left-2">
                        <img
                          src="/assets/images/group/2.jpg"
                          alt="group-image"
                          className="w-100 rounded"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="container-img-right w-lg-75">
                      <img
                        src="/assets/images/group/3.jpg"
                        alt="group-image"
                        className="w-100 rounded"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
