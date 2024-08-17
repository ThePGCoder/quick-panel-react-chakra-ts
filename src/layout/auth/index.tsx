import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import FadeIn from "../../components/FadeIn";
import Middle from "../../components/Middle";

import Header from "./Header";
import Footer from "./Footer";

interface AuthLayoutProps {}

const AuthLayout: React.FC<AuthLayoutProps> = () => {
  return (
    <>
      <Box
        backgroundImage={useColorModeValue(
          "linear-gradient(rgba(255, 255, 255, 0.66), rgba(255, 255, 255, 0.66)),url(/bg.png)",
          "linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),url(/bg.png)"
        )}
        backgroundSize="cover"
        height="100vh"
      >
        <Header />
        <FadeIn>
          <Middle>
            <Outlet />
          </Middle>
        </FadeIn>
        <Footer />
      </Box>
    </>
  );
};

export default AuthLayout;
