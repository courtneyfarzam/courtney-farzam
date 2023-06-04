import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

// connects App to <div id="root"></div> within ./client/public/index.html
ReactDOM.render(<App />, document.getElementById('root'));