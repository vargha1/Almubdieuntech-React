import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainProject from './Pages/MainProject';
import MainTech from './Pages/MainTech';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainProject />} />
      <Route path="/technologies" element={<MainTech />} />
    </Routes>
  </BrowserRouter>
)
