import React from 'react';
import './App.css';
import { ApiProvider } from './hooks/AuthContext';
import { WatchListProvider } from "./contexts/WatchListContext";
import MainBody from './components/MainBody/index';
import { Routers } from './routers/Routers';

function App() {
  return (
    <ApiProvider>
      <WatchListProvider>
        <MainBody>
          <Routers />
        </MainBody>
      </WatchListProvider>
    </ApiProvider>
  );
}

export default App;
