import { createContext, useContext } from "react";

const AppContext = createContext(null);

const appContextValue = {
  siteName: "Villgro",
  hiddenChromeRoutes: ["/incubation-application"],
};

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider.");
  }

  return context;
};
