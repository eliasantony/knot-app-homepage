import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from '../assets/styles/Preview.module.css';

import appScreen1 from '../assets/images/app_preview_1.jpg';
import appScreen2 from '../assets/images/app_preview_2.jpg';
import appScreen3 from '../assets/images/app_preview_3.jpg';
import appScreen4 from '../assets/images/app_preview_4.png';
import appScreen5 from '../assets/images/app_preview_5.png';
import appScreen6 from '../assets/images/app_preview_6.png';
import appScreen7 from '../assets/images/app_preview_7.png';
import appScreen8 from '../assets/images/app_preview_8.png';
import appScreen9 from '../assets/images/app_preview_9.png';
import appScreen10 from '../assets/images/app_preview_10.png';

const images: string[] = [
  appScreen1,
  appScreen2,
  appScreen3,
  appScreen4,
  appScreen5,
  appScreen6,
  appScreen7,
  appScreen8,
  appScreen9,
  appScreen10,
];

const AUTO_SWIPE_DELAY = 5000; // 5 seconds

const Preview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSwipeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const startAutoSwipeTimer = useCallback(() => {
    if (autoSwipeTimerRef.current) {
      clearInterval(autoSwipeTimerRef.current);
    }
    autoSwipeTimerRef.current = setInterval(goToNext, AUTO_SWIPE_DELAY);
  }, [goToNext]);

  // Start auto-swipe timer on mount
  useEffect(() => {
    startAutoSwipeTimer();
    return () => {
      if (autoSwipeTimerRef.current) {
        clearInterval(autoSwipeTimerRef.current);
      }
    };
  }, [startAutoSwipeTimer]);

  // Handlers for manual navigation that reset the timer
  const handleNext = () => {
    goToNext();
    startAutoSwipeTimer();
  };

  const handlePrevious = () => {
    goToPrevious();
    startAutoSwipeTimer();
  };

  return (
    <div className={styles.previewSection}>
      <div className={styles.previewContainer}>
        <div className={styles.previewText}>
          <h2 className={styles.knotGradientBg}>See Knot in Action</h2>
          <p>
            Get a glimpse of how Knot helps you create beautiful, private newsletters and stay connected with your groups. Intuitive design, focused communication.
          </p>
        </div>
        <div className={styles.previewCarousel}>
          <div
            className={styles.imageContainer}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Preview ${index + 1}`}
                className={styles.previewImage}
              />
            ))}
          </div>
          <button
            onClick={handlePrevious}
            className={`${styles.carouselButton} ${styles.prev}`}
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className={`${styles.carouselButton} ${styles.next}`}
            aria-label="Next image"
          >
            &#10095;
          </button>
          <div className={styles.carouselDots}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                onClick={() => {
                  setCurrentIndex(index);
                  startAutoSwipeTimer();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;