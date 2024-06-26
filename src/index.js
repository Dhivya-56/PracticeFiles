import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import AppContext from './AppContext';
import AppDesigning from './AppDesigning';
// import AppResponsive from './AppResponsive';
// import AppMantis from './AppMantis';
import {BrowserRouter} from 'react-router-dom'
// import AppWebie from './AppWebie';
// import AppMultiform from './AppMultiform';
import AppPls from "./AppPls";
import { store } from './store';
import { Provider } from 'react-redux';
import AppContextapi from './AppTailwindPract';
import AppWebsiteTailwind from './AppWebsiteTailwind';
import AppDesi from './AppDesi';
import AppDataProcessing from './AppDataProcessing';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
  
  <AppPls />

  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
{/* <AppDesigning/> */}

  {/* <AppDesi/> */}
  {/* <AppDataProcessing/> */}
  {/* <AppContextapi/> */}
  {/* <AppWebsiteTailwind/> */}
{/* <App/> */}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
