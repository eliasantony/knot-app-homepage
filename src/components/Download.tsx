import React from 'react';
import appStoreButton from '../assets/images/appStore_button.svg';
import playStoreButton from '../assets/images/playStore_button.png';
// Optional: Add a relevant image
// import downloadIllustration from '../assets/images/download-illustration.svg';

const Download: React.FC = () => (
  // Use knot-gradient-bg or another style
  <section id="download" className="download-section knot-gradient-bg">
    <h2>Ready to Connect?</h2>
    <p>
      Download Knot today and start building deeper connections with your favorite people. Available now on iOS and Android.
    </p>
    <div className="app-buttons">
    <a href="https://apps.apple.com/us/app/knot-app/6746635520" target="_blank" rel="noopener noreferrer">
          <button>
            <img src={appStoreButton} alt="Download on App Store"/>
          </button>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.knotnewsletter.app" target="_blank" rel="noopener noreferrer">
        <button>
          <img src={playStoreButton} alt="Get it on Google Play" />
        </button>
        </a>
    </div>
  </section>
);

export default Download;