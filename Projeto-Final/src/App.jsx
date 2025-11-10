import React, { useState } from 'react';
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
  const noHeaderPaths = ['/', '/login', '/loading'];
  const showHeader = !noHeaderPaths.includes(location.pathname);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (novoTermo) => {
    console.log('App handleSearchChange:', novoTermo);
    setSearchTerm(novoTermo);
  };

  return (
    <ApiProvider>
      <UserProvider>
        <WatchListProvider>
          <MainBody>
            {showHeader && <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />}
            <Routers searchTerm={searchTerm} />
          </MainBody>
        </WatchListProvider>
      </UserProvider>
    </ApiProvider>
  );
}

export default App;