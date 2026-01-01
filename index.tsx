
import React from 'react';
import ReactDOM from 'react-dom/client';

/** 
 * SHIM: 'process' is not defined in the browser, but needed for 
 * environment variable access in the current setup.
 */
if (typeof window !== 'undefined') {
  (window as any).process = (window as any).process || { env: {} };
}

import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
