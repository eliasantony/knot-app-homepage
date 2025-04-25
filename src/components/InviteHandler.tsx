import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const InviteHandler: React.FC = () => {
  const { groupId, token } = useParams<{ groupId: string; token: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // --- Logic to handle the invite ---
    console.log('Handling Invite for Group:', groupId, 'Token:', token);

    // Example: Try to open the app via deep link immediately
    // This structure depends heavily on how your app handles deep links
    const appDeepLink = `knotapp://invite?group=${groupId}&token=${token}`; // **Replace** with your actual app scheme and path

    // Try redirecting using window.location (might show a browser prompt)
    window.location.href = appDeepLink;

    // Fallback: After a short delay, redirect to app stores or a specific web page
    // This handles cases where the app isn't installed or the deep link fails
    const fallbackTimeout = setTimeout(() => {
        console.log('App not opened or not installed, redirecting to fallback...');
        // Option 1: Redirect to a general download page (if you have one)
        // navigate('/download-app');

        // Option 2: Redirect based on OS (more complex, requires OS detection)
        // const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // if (/android/i.test(userAgent)) {
        //    window.location.href = 'https://play.google.com/store/apps/details?id=com.yourcompany.knot'; // Replace
        // } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        //    window.location.href = 'https://apps.apple.com/us/app/your-knot-app/idYOUR_APP_ID'; // Replace
        // } else {
        //    // Fallback for desktop or unknown OS
             navigate('/'); // Redirect to homepage or a specific info page
        // }

        // Simple Fallback: Redirect to homepage
         navigate('/');


    }, 2000); // Wait 2 seconds before fallback

    // Cleanup the timeout if the component unmounts early
    return () => clearTimeout(fallbackTimeout);

  }, [groupId, token, navigate]);


  // Display a user-friendly message while attempting redirect
  return (
    <div style={{ padding: '40px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>Joining Knot Group...</h2>
      <p>Attempting to open the Knot app.</p>
      <p>If the app doesn't open automatically, please ensure it's installed.</p>
      {/* You could add manual download links here as well */}
      <p>Group ID: {groupId}</p> {/* Maybe hide token */}
    </div>
  );
};

export default InviteHandler;