import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Esmalte from './pages/Esmaltes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Esmalte/>
  </React.StrictMode>
);


