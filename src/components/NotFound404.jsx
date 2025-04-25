import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFound;