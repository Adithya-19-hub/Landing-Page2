import React from 'react';
import Navbar from './Header/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home data='Features' /></>
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
