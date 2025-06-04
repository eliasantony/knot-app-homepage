import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import appScreen1 from '../assets/images/app_preview_1.jpg';
import appScreen2 from '../assets/images/app_preview_2.jpg';
import appScreen3 from '../assets/images/app_preview_3.jpg';
import appScreen4 from '../assets/images/app_preview_4.png';

const Preview: React.FC = () => {
  // Scroll to top on mount (matches your other pages)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Slider settings (copied/adapted from your preview.jsx)
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,           // 3 images at once on desktop
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',      // makes prev/next peek in behind
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    cssEase: 'ease-in-out',
    arrows: false,             // hide arrows (you can toggle true if you want them)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,      // on mobile, show just one
          centerMode: true,
          centerPadding: '0px',
          arrows: false,
        },
      },
    ],
  };

  // All of your app‐preview images
  const screens = [
    appScreen1,
    appScreen2,
    appScreen3,
    appScreen4,
  ];

  return (
    <section id="preview" className="preview-section">

        <div className="preview-container">
          <div className="preview-text">
            <h2>See Knot in Action</h2>
            <p>
              Get a glimpse of how Knot helps you create beautiful, private newsletters and stay connected with your groups. Intuitive design, focused communication.
            </p>
          </div>
          <div className="preview-carousel">
            <Slider {...settings}>
              {screens.map((src, index) => (
                <div key={index} className="preview-slide">
                  <img
                    src={src}
                    alt={`Knot App Screen ${index + 1}`}
                    className="preview-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
    </section>
  );
};

export default Preview;