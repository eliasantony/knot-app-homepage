import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fade } from 'react-reveal'; // Import Fade from react-reveal
import preview1 from '../assets/previews/preview1.png';
import preview2 from '../assets/previews/preview2.png';
import preview3 from '../assets/previews/preview3.png';
import screenshot2 from '../assets/screenshots/screenshot2.png';
import screenshot3 from '../assets/screenshots/screenshot3.png';
import screenshot4 from '../assets/screenshots/screenshot4.png';
import screenshot5 from '../assets/screenshots/screenshot5.png';
import screenshot6 from '../assets/screenshots/screenshot6.png';
import screenshot7 from '../assets/screenshots/screenshot7.png';
import screenshot8 from '../assets/screenshots/screenshot8.png';
import screenshot9 from '../assets/screenshots/screenshot9.png';

const Preview = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Show 3 images at once on desktop
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10%", // Adjust padding to make prev/next images slightly behind
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
        {
        breakpoint: 768, // Mobile screens
        settings: {
            slidesToShow: 1, // Show only one image at a time
            centerMode: true, // Ensure it remains centered
            centerPadding: "0px", // Prevent shifts
            arrows: false, // Hide arrows on mobile
        },
        },
    ],
};

  const images = [
    preview1, preview2, preview3, screenshot2, screenshot3, 
    screenshot4, screenshot5, screenshot6, screenshot7, screenshot8, screenshot9
  ];

  return (
      <section id="preview" className="preview-section">
        <Fade bottom>
      <div className="preview-container">
        <div className="preview-text">
          <h2 className="preview-heading">App Preview</h2>
          <p>Take a look at FoodFellas in action! <br /> Swipe through the preview images to see the features in detail.</p>
        </div>
        <div className="preview-carousel">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="preview-slide">
                <img 
                  src={src} 
                  alt={`Screenshot ${index + 1}`} 
                  className="preview-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Fade>
    </section>
  );
};

export default Preview;