import React from 'react'
import './App.css'
import { ApiProvider } from './hooks/AuthContext';
import MainBody from './components/MainBody/index';
import { Routers } from './routers/Routers';

function App() {
  return (
    <ApiProvider>
      <MainBody>
        <Routers />
      </MainBody>
    </ApiProvider>
  )
}

export default App
