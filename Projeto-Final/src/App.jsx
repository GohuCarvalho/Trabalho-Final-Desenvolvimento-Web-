import React, { useState } from 'react'
import './App.css'
import { ApiProvider } from './hooks/AuthContext';
import MainBody from './components/MainBody/index';
import Header from './components/Header/index';
import { Routers } from './routers/Routers';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <MainBody>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </MainBody>
    </>
  )
}

export default App
