import ReactGA from 'react-ga4';

const initializeAnalytics = () => {
  ReactGA.initialize('G-XXXXXXXXXX'); // Ersetze mit deiner Tracking-ID
};

const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

export { initializeAnalytics, trackPageView };