import './App.css';
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import StartPage from './pages/StartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SuggestionPage from './pages/SuggestionPage';
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'
import ProtectedRoute from './components/ProtectedRoute';
import StationInfo from './components/StationInfo';
import Navbar from './components/Navbar';

import React, { useRef, useEffect, useState } from 'react';

function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/start' element={ <StartPage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='/suggestions' element={ 
        <ProtectedRoute>
          <SuggestionPage />
        </ProtectedRoute>
         } />
        <Route path='/contact' element={ <ContactPage />} />
        <Route path='/stations/:id' element={<StationInfo />} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/login' element={<LogInPage />} />
      </Routes>
    </div>
  );
}

export default App;
