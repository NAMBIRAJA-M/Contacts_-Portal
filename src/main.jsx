
import { createRoot } from 'react-dom/client'
import React from 'react';
import { RouterProvider, Navigate, createBrowserRouter } from 'react-router-dom';
import './index.css'
import Dashboard from './Components/Dashboard.jsx';
import Layout from './Components/Layout.jsx'
import ContactsCards from './Components/Contacts.jsx';
import ComingSoon from './Components/ComingSoon.jsx';
import HomePage from './Components/HomePage.jsx';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
    return isAuthenticated ? children : <Navigate to="/" />;
};
const RootComponent =() =>{

  const router= createBrowserRouter([
 
       {
          path:'/',
          element: <HomePage />,
    
       },
       {
          path:'/',
          element: <Layout  />,
          children:[
             {
               path: 'dashboard',
                element:(
                   <ProtectedRoute>
                      <Dashboard />
                   </ProtectedRoute>
                
                ),
             },
              {
               
                path :'contacts',
                element:(
                   <ProtectedRoute>
                      <ContactsCards />
                   </ProtectedRoute>
                
                ),
             }, 
             {
              
               path :'soon',
               element:(
                  <ProtectedRoute>
                     <ComingSoon />
                  </ProtectedRoute>
               
               ),
            }, 
             /*
              {
               
                path :'',
                element:(
                   <ProtectedRoute>
                    
                   </ProtectedRoute>
                
                ),
             },  */
           
          ]
          
       }
    ])
    
  return  <RouterProvider router={router} />
 }


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
)
