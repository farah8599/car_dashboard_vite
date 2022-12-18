import React from 'react'
import ReactDOM from 'react-dom/client'
import "remixicon/fonts/remixicon.css";
import App from './App';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
