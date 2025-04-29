import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const InviteHandler: React.FC = () => {
  const { groupId, token } = useParams<{ groupId: string; token: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Handling Invite for Group:', groupId, 'Token:', token);

    // Try to open the app via deep link immediately.
    const appDeepLink = `knotapp://invite?group=${groupId}&token=${token}`; // Replace with your actual app scheme and path
    window.location.href = appDeepLink;

    // Removed fallback logic

  }, [groupId, token, navigate]);

  return (
    <div style={{ padding: '40px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>Joining Knot Group...</h2>
      <p>Attempting to open the Knot app.</p>
      <p>If the app doesn't open automatically, please ensure it's installed.</p>
      <p>Group ID: {groupId}</p>
      <p>Token: {token}</p>
    </div>
  );
};