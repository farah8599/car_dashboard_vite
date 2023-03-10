import React from 'react'
import ReactDOM from 'react-dom/client'
import "remixicon/fonts/remixicon.css";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './redux/Store'
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App /> */}
      <BrowserRouter>

        <App />

      </BrowserRouter>
    </React.StrictMode>,
  </Provider>
)
