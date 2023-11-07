import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import persistor, { store } from './store/index.tsx'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
          </PersistGate>
        
        </Provider>
    </BrowserRouter>

  </React.StrictMode>,
)
