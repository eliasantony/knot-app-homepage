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
      Download Knot today and start building deeper connections with your favorite people. Available soon on iOS and Android.
    </p>
    <div className="app-buttons">
      <button disabled>
        <img src={appStoreButton} alt="Download on App Store (coming soon)" />
      </button>
      <button disabled>
        <img src={playStoreButton} alt="Get it on Google Play (coming soon)" />
      </button>
    </div>
     {/* Optional Image */}
     {/* <div className="download-image">
         <img src={downloadIllustration} alt="Illustration showing connection" />
     </div> */}
  </section>
);

export default Download;