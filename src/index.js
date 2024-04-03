import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-000000'
}

TagManager.initialize(tagManagerArgs)
...


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
