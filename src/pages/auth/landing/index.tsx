import { VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import FadeIn from "../../../components/FadeIn";
import CustomButton from "../../../components/CustomButton";
import Logo from "../../../components/Logo";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
  const navigate = useNavigate();
  return (
    <>
      <FadeIn>
        <VStack spacing={5}>
          <Logo size="lg" />
          <Text>Dashboard panels made easy.</Text>
          <HStack spacing={5}>
            <CustomButton width="100%" onClick={() => navigate("/login")}>
              <Icon icon="mdi:lock" height={20} />
              <Text pl={2}>Login</Text>
            </CustomButton>
            <CustomButton width="100%" onClick={() => navigate("/register")}>
              <Icon icon="mdi:sign" height={20} />
              <Text pl={2}>Register</Text>
            </CustomButton>
          </HStack>
        </VStack>
      </FadeIn>
    </>
  );
};

export default Landing;
