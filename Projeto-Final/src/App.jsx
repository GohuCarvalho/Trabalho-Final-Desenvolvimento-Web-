import React from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';
import { ApiProvider } from './hooks/AuthContext';
import { UserProvider } from './hooks/UserContext';
import { WatchListProvider } from "./contexts/WatchListContext";
import MainBody from './components/MainBody/index';
import Header from './components/Header/index';
import { Routers } from './routers/Routers';

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== '/' && location.pathname !== '/loading';

  return (
    <ApiProvider>
      <UserProvider>
      <WatchListProvider>
        <MainBody>

          {showHeader && <Header />}

          <Routers />

        </MainBody>
      </WatchListProvider>
      </UserProvider>
    </ApiProvider>
  );
}

export default App;