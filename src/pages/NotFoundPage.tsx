import React, { useEffect } from 'react';
import './PageStyles.css'; // Create this CSS file for common page styling

const NotFoundPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Please check the URL or return to the <a href="/">home page</a>.</p>
    </div>
  );
};

export default NotFoundPage;