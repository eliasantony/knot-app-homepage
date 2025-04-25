import React from 'react';
// Import carousel library if needed, e.g., import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import appScreen1 from '../assets/images/Group Detail.png'; // Replace with actual screen previews


const Preview: React.FC = () => {
    // Placeholder images - replace with yours
    const screens = [appScreen1];

    return (
        <section id="preview" className="preview-section">
            <div className="preview-container">
                <div className="preview-text">
                    <h2>See Knot in Action</h2>
                    <p>
                        Get a glimpse of how Knot helps you create beautiful, private newsletters and stay connected with your groups. Intuitive design, focused communication.
                    </p>
                    {/* Add more descriptive text if needed */}
                </div>
                <div className="preview-carousel">
                    {/* Basic static image display - Replace with a Carousel component for swiping */}
                    {/* Example using just the first image for now */}
                     <img
                            src={screens[0]}
                            alt={`Knot App Screen`}
                            className="preview-image"
                        />

                    {/* --- OR --- */}
                    {/* Example using a simple map (no carousel functionality yet) */}
                    {/* <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
                       {screens.map((screen, index) => (
                           <img
                                key={index}
                                src={screen}
                                alt={`Knot App Screen ${index + 1}`}
                                className="preview-image" // Adjust style if needed for multiple static images
                                style={{ flexShrink: 0, width: '250px' }} // Example inline style
                            />
                        ))}
                    </div> */}

                    {/* --- OR --- */}
                    {/* Example with a library like Swiper.js */}
                    {/* <Swiper spaceBetween={30} slidesPerView={1.2} centeredSlides={true}>
                        {screens.map((screen, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={screen}
                                    alt={`Knot App Screen ${index + 1}`}
                                    className="preview-image"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                </div>
            </div>
        </section>
    );
};

export default Preview;