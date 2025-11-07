import React, { useState } from 'react'
import './App.css'
import { ApiProvider } from './hooks/AuthContext';
import MainBody from './components/MainBody/index';
import Header from './components/Header/index';
import { Routers } from './routers/Routers';


function App() {
  return (
    <>
      <MainBody>
        <Routers/>
      </MainBody>
    </>
  )
}

export default App
