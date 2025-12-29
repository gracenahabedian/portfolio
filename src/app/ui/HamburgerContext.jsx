'use client';
import { createContext, useState } from 'react';

/**
 * sets default context values.
 */
export const HamburgerContext = createContext({
  hamburgerActive: false,
  setHamburgerActive: () => {},
});

/**
 * @param {Object} props includes:
 *
 * @returns context provider
 */
export function HamburgerContextProvider({ children }) {
  // state variables to be accessed by all files
  const [hamburgerActive, setHamburgerActive] = useState(false);

  // context wrapper containing state variables
  return (
    <HamburgerContext.Provider value={{ hamburgerActive, setHamburgerActive }}>
      {children}
    </HamburgerContext.Provider>
  );
}
