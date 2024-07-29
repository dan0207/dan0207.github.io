import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import AuthClient from './data/AuthClient.json'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import './custom.scss'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={AuthClient.web.client_id}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>
)
