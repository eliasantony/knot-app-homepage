import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import appStoreButton from '../assets/images/appStore_button.svg';
import playStoreButton from '../assets/images/playStore_button.png';

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center' as const,
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackTitle: {
    color: 'var(--primary-color)',
    marginBottom: '1rem',
  },
  instructions: {
    textAlign: 'left' as const,
    maxWidth: 400,
    margin: '0 auto 20px',
    lineHeight: 1.6,
    color: 'var(--text-light)',
  },
  inputGroup: {
    display: 'flex',
    width: '100%',
    maxWidth: 500,
    margin: '0 auto',
    borderRadius: 4,
    overflow: 'hidden',
    border: '1px solid #555',
  },
  input: {
    flex: 1,
    padding: '12px',
    border: 'none',
    backgroundColor: 'var(--background-light)',
    color: 'var(--text-dark)',
    fontSize: '1rem',
  },
  copyBtn: {
    padding: '12px 20px',
    border: 'none',
    background: 'var(--primary-color)',
    color: '#fff',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
  },
};

const InviteHandler: React.FC = () => {
  const { groupId, token } = useParams<{ groupId: string; token: string }>();
  const [showFallback, setShowFallback] = useState(false);

  // Full invitation link
  const invitationLink = `${window.location.origin}/invite/${groupId}/${token}`;

  useEffect(() => {
    const hasTriedAppLink = sessionStorage.getItem('knotAppLinkTried');
  
    if (!hasTriedAppLink) {
      sessionStorage.setItem('knotAppLinkTried', 'true');
      window.location.href = invitationLink;
    }
  
    const timer = setTimeout(() => setShowFallback(true), 1500);
    return () => clearTimeout(timer);
  }, [invitationLink]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(invitationLink)
      .then(() => alert('Invitation link copied!'))
      .catch(() => alert('Copy failed — please try manually.'));
  };

  return (
    <div style={styles.container}>
      {!showFallback ? (
        <>
          <h2>Joining your Knot group…</h2>
          <p>Attempting to open the Knot app automatically.</p>
          <p>If it doesn’t open, just scroll down for instructions.</p>
        </>
      ) : (
        <>
          <h2 style={styles.fallbackTitle}>Can’t open the app?</h2>
          <p>If the app doesn’t open automatically, follow these steps:</p>
          <ol style={styles.instructions}>
            <li>Copy the invitation link below.</li>
            <li>Install and open the Knot app.</li>
            <li>Go to the “Groups” tab (second icon at the bottom).</li>
            <li>Tap the “+” button in the top right.</li>
            <li>Choose “Join a Group.”</li>
            <li>Paste the link into the field and confirm.</li>
          </ol>

          <div style={styles.inputGroup}>
            <input
              type="text"
              readOnly
              value={invitationLink}
              style={styles.input}
            />
            <button onClick={handleCopy} style={styles.copyBtn}>
              Copy Link
            </button>
          </div>
        </>
      )}
      <div className="app-buttons">
      <button disabled>
        <img src={appStoreButton} alt="Download on App Store (coming soon)" />
      </button>
      <button disabled>
        <img src={playStoreButton} alt="Get it on Google Play (coming soon)" />
      </button>
    </div>
    </div>
    
  );
};

export default InviteHandler;
