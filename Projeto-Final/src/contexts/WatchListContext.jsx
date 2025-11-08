import { createContext, useState } from "react";


export const WatchListContext = createContext();

export function WatchListProvider({ children }) {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movie) => {
  if (!watchList.find((m) => m.id === movie.id)) {
    const updatedList = [...watchList, movie];
    setWatchList(updatedList);
    console.log(" Adicionado à WatchList:", movie);

  } else {
    console.log(" Item já está na WatchList:", movie);
  }
};


  const removeFromWatchList = (id) => {
    setWatchList(watchList.filter((m) => m.id !== id));
  };

  return (
    <WatchListContext.Provider value={{ watchList, addToWatchList, removeFromWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
}
