import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function DeepLinkFallback() {
  const { type, id } = useParams();
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get('userId');

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Could not open link</h1>
      <p>It looks like the deep link didn't work.</p>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>ID:</strong> {id}</p>
      {userId && <p><strong>User ID:</strong> {userId}</p>}
      <p>Try opening the app manually.</p>
      <p>If you need help, visit our <a href="/support">support page</a>.</p>
    </div>
  );
}

export default DeepLinkFallback;