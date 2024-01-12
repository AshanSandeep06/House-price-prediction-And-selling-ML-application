import { RefObject, createContext, useContext, useRef } from "react";

interface AllRefs {
  dashboardRef: RefObject<any>;
  exploreRef: RefObject<any>;
  footerRef: RefObject<any>;
}

const MyContext = createContext<AllRefs | undefined | null>(null);

// Create a custom hook for accessing the context value
const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

// Create a Provider Component to wrap your app
interface MyContextProviderProps {
  children: React.ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const homeRef = useRef<any>(null);
  const exploreRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  const allRefs: AllRefs = {
    dashboardRef: homeRef,
    exploreRef: exploreRef,
    footerRef: contactRef,
  };

  return <MyContext.Provider value={allRefs}>{children}</MyContext.Provider>;
};

export { MyContextProvider, useMyContext };
