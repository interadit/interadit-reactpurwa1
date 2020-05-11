import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Prime from './component/prime';
import Materialui from './component/materialui';
import * as serviceWorker from './serviceWorker';


import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(

  <BrowserRouter>
    {/* <Prime /> */}
    {/* <App /> */}
    <Materialui />
    
  </BrowserRouter>,


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// registerServiceWorker();
