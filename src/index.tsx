import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { reportWebVitals } from './reportWebVitals';
import { register } from './registerServiceWorker';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element with id "root"');
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker with configuration
register({
  swUrl: '/service-worker.js',
  onUpdate: (registration: ServiceWorkerRegistration) => {
    console.log('New content is available; please refresh.');
    // You can add more logic here using the registration object
  },
  onSuccess: () => {
    console.log('Service worker registration successful');
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
