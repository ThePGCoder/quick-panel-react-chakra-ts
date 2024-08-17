import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import { theme } from "./styles/theme";
import { ActiveRouteContext } from "./hooks/activeRouteContext";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState<any>();
  const changeActiveRoute = (route: string | null) => {
    setActiveRoute(route);
  };
  
  return (
    <ChakraProvider theme={theme}>
      <ActiveRouteContext.Provider value={{ activeRoute, changeActiveRoute }}>
        {children}
      </ActiveRouteContext.Provider>
    </ChakraProvider>
  );
};

export default Providers;
