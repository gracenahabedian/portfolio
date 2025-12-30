'use client';
import { createContext, useState } from 'react';

/**
 * sets default context values.
 */
export const WindowContext = createContext({
  windowSize: -1,
  setWindowSize: () => {},
});

/**
 * @param {Object} props includes:
 *
 * @returns context provider
 */
export function WindowContextProvider({ children }) {
  // state variables to be accessed by all files
  const [windowSize, setWindowSize] = useState(-1);

  // context wrapper containing state variables
  return (
    <WindowContext.Provider value={{ windowSize, setWindowSize }}>
      {children}
    </WindowContext.Provider>
  );
}
