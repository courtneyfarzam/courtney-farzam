import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

// connects App to <div id="root"></div> within ./client/public/index.html...renders the App that we create into that div
const root = createRoot(document.getElementById('root'));
root.render(<App />);

// in the console, run "npm run dev" to gain access to sanity desk