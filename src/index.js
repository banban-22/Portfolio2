import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'G-2MJ7CN51WR'
}

TagManager.initialize(tagManagerArgs)
...


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
