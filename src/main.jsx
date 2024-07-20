import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import HomePage from './Components/Home.jsx';
import CarbonFootprintCalculator from './Components/Calculator.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>404 Page Not Found</div>
  },{
    path: '/calculator',
    element: <CarbonFootprintCalculator/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);


