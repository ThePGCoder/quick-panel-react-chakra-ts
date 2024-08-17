import {
  Box,
  Stack,
  Center,
  InputGroup,
  Text,
  InputLeftElement,
  useColorModeValue,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomCard from "../../../components/CustomCard";

import {
  primary,
  secondary,
  lightBorder,
  darkBorder,
} from "../../../styles/constants";
import { Icon } from "@iconify/react";
import SocialProviders from "../../../layout/auth/components/SocialProviders";
import CustomButton from "../../../components/CustomButton";
import Logo from "../../../components/Logo";
import FadeIn from "../../../components/FadeIn";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  return (
    <FadeIn>
      <Box width={{ xs: "85%", sm: "85%", md: "350px", lg: "350px" }}>
        <CustomCard>
          <Stack spacing={4} p={6}>
            <Center py={2}>
              <Logo size="lg" />
            </Center>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon
                  icon="mdi:email"
                  height={20}
                  color={useColorModeValue(primary, secondary)}
                />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email"
                borderColor={useColorModeValue(lightBorder, darkBorder)}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon
                  icon="mdi:lock"
                  height={20}
                  color={useColorModeValue(primary, secondary)}
                />
              </InputLeftElement>
              <Input
                placeholder="Password"
                type="password"
                borderColor={useColorModeValue(lightBorder, darkBorder)}
              />
              <InputRightElement>
                <Icon icon="mdi-eye" height={20} />
              </InputRightElement>
            </InputGroup>
            <Center>
              <Text fontSize="sm">
                <Link to="" color={useColorModeValue(primary, secondary)}>
                  <Box color={useColorModeValue(primary, secondary)}>
                    Forgot Password?
                  </Box>
                </Link>
              </Text>
            </Center>
            <Center>
              <SocialProviders />
            </Center>

            <CustomButton width="100%" onClick={() => navigate("/home")}>
              <Icon icon="mdi:lock" height={20} />
              <Text pl={2}>Login</Text>
            </CustomButton>
            <Center fontSize="small">
              Don&apos;t have an account?&nbsp;
              <Link
                color={useColorModeValue(primary, secondary)}
                to="/register"
              >
                <Box color={useColorModeValue(primary, secondary)}>
                  Register
                </Box>
              </Link>
            </Center>
          </Stack>
        </CustomCard>
      </Box>
    </FadeIn>
  );
};

export default Login;
