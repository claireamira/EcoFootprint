import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import HomePage from './Components/Home.jsx';
import CarbonFootprintCalculator from './Components/Calculator.jsx';
import ResultsPage from './Components/Results.jsx';
import ResourcesPage from './Components/Resources.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>404 Page Not Found</div>
  },{
    path: '/calculator',
    element: <CarbonFootprintCalculator/>
  },{
    path: '/results',
    element: <ResultsPage/>
  },{
    path: '/resources',
    element: <ResourcesPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);


