import React, { createContext, useState, useContext, useEffect } from 'react';

const VibeContext = createContext();

export const VibeProvider = ({ children }) => {

  const [currentVibe, setCurrentVibe] = useState(() => {
    return localStorage.getItem('vibe') || 'default';
  });

  const changeVibe = (newVibe) => {
    setCurrentVibe(newVibe);
  };

  useEffect(() => {
    localStorage.setItem('vibe', currentVibe);
  }, [currentVibe]);

  useEffect(() => {
    const body = document.body;
    body.classList.remove('vibe-relax', 'vibe-laugh', 'vibe-inspire', 'default');
    body.classList.add(`vibe-${currentVibe}`);
  }, [currentVibe]);

  return (
    <VibeContext.Provider value={{ currentVibe, changeVibe }}>
      {children}
    </VibeContext.Provider>
  );
};

export const useVibe = () => useContext(VibeContext);
