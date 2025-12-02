import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: 'Elena R., Madrid',
    role: 'Spain',
    image: '/assets/images/speakers/s1.png',
    text: 'As a food distributor in Europe, we need high-quality spices that maintain aroma and freshness even after long transit. The turmeric, cumin, and black pepper supplied by them are top-grade..'
  },
  {
    name: 'Ahmed M.',
    role: 'Dubai, UAE',
    image: '/assets/images/speakers/s4.png',
    text: 'We’ve been importing Indian Basmati rice and pulses for over three years from this company. The product quality, timely shipments, and professional communication have always exceeded our expectations..'
  },
  {
    name: 'Li Wei',
    role: 'Singapore',
    image: '/assets/images/speakers/s2.png',
    text: 'Their Assam tea and South Indian coffee beans are simply excellent! Consistent flavor, great packaging, and very competitive prices. We’ve built a long-term relationship based on trust and quality..'
  },
  {
    name: 'Maria T.',
    role: 'Melbourne, Australia',
    image: '/assets/images/speakers/s3.png',
    text: 'We import various pulses and lentils for retail distribution. Shipments are always on time and compliant with international food safety standards. Great communication and customer service throughout..'
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1 // Start at the second slide
        }
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider testimonial-slide">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-1"> {/* ← adds horizontal gap */}
            <div className="box1 mx-4 p-6 rounded bg-white" key={index}>
              <div className="testimonial-content position-relative">
                <i className="fa fa-quote-left position-absolute" aria-hidden="true"></i>
                <p className="my-6 position-relative w-md-75 ms-6">{item.text}</p>
              </div>
              <div className="testimonial-bio d-flex align-items-center">
                <img src={item.image} alt={item.name} className="bio-img me-5 rounded-circle float-start" width={60} />
                <div>
                  <p className="mb-1 fw-semibold black">{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
