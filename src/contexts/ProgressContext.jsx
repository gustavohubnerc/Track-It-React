import { createContext, useState } from "react";

export const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [ progress, setProgress ] = useState(0);
  const [ reset, setReset ] = useState(false);

  return (
    <ProgressContext.Provider value={{ progress, setProgress, reset, setReset }}>
      {children}
    </ProgressContext.Provider>
  );
}
