import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const APS_ACCESS_TOKEN = ''; // Specify your access token
const APS_MODEL_URN = ''; // Specify your model URN

const root = ReactDOM.createRoot(document.getElementById('root'));
if (!APS_ACCESS_TOKEN || !APS_MODEL_URN) {
    root.render(<div>Please specify <code>APS_ACCESS_TOKEN</code> and <code>APS_MODEL_URN</code> in the source code.</div>);
} else {
    root.render(<App token={APS_ACCESS_TOKEN} urn={APS_MODEL_URN} />);
}
