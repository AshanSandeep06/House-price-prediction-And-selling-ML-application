import {
  Dispatch,
  RefObject,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import HomePage from "../../components/Home";
import UserPage from "../../pages/SellerPages/UserPage";
import { useNavigate } from "react-router-dom";

interface AllObjects {
  dashboardRef: RefObject<any>;
  exploreRef: RefObject<any>;
  footerRef: RefObject<any>;
  useStateLocation: { lat: number; lng: number };
  setUseStateLocation: Dispatch<SetStateAction<{ lat: number; lng: number }>>;
  // currentComponent: React.ReactNode;
  // setCurrentComponent: Dispatch<any>;
  // handleBtnLoginClick: () => void;
}

const MyContext = createContext<AllObjects | undefined | null>(null);

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
  const navigate = useNavigate();

  const homeRef = useRef<any>(null);
  const exploreRef = useRef<any>(null);
  const contactRef = useRef<any>(null);
  const [currentComponent, setCurrentComponent] = useState<any>(null);

  const handleBtnLoginClick = () => {
    switch (currentComponent) {
      case null:
        setCurrentComponent(<HomePage />);
        break;

      case (<HomePage />):
        setCurrentComponent(<UserPage />);
        break;

      default:
        setCurrentComponent(null);
        break;
    }
  };

  const [useStateLocation, setUseStateLocation] = useState({
    lat: 7.269843363909954,
    lng: 80.63690185546876,
  });

  const allRefs: AllObjects = {
    dashboardRef: homeRef,
    exploreRef: exploreRef,
    footerRef: contactRef,
    useStateLocation: useStateLocation,
    setUseStateLocation: setUseStateLocation,
  };

  return <MyContext.Provider value={allRefs}>{children}</MyContext.Provider>;
};

export { MyContextProvider, useMyContext };
