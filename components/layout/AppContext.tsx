import { createContext, useContext } from 'react';

interface AppContextType {
  isIndexOpen: boolean;
  setIsIndexOpen: (open: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  isIndexOpen: false,
  setIsIndexOpen: () => {},
});

export const useAppContext = () => useContext(AppContext);
