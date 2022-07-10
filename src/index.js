import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/Global.css';
import '../src/styles/Slider.module.css';
import App from './App';
import MainProvider from './context/MainContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MainProvider>
      <App />
    </MainProvider>
  </BrowserRouter>
);
