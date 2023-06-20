import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div id='modal'style={{position:'absolute',zIndex:1000}}></div>
<BrowserRouter>
    <App />
  </BrowserRouter>

  </div>
  
);


