import {
  VStack,
  Box,
  Avatar,
  useColorModeValue,
  HStack,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import CustomCard from "../../components/CustomCard";
import Middle from "../../components/Middle";
import { ActiveRouteContext } from "../../hooks/activeRouteContext";
import FadeIn from "../../components/FadeIn";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Profile");
  }, []);
  return (
    <FadeIn>
      <Middle>
        <CustomCard>
          <VStack>
            <Box position="relative">
              <Image
                w="300px"
                h="200px"
                src={"/bg3.jpg"}
                objectFit="cover"
                borderRadius="4px"
              />
              <Box position="absolute" bottom={"-50px"} left="calc(50% - 50px)">
                <Avatar
                  size="xl"
                  src="/avatar.png"
                  border={useColorModeValue(
                    "4px white solid",
                    "4px #202020 solid"
                  )}
                  background="linear-gradient(#A0AEC0, #4A5568)"
                
                />
              </Box>
            </Box>

            <VStack p={4} pt={50}>
                <Text fontSize="lg">
                  Admin User
                </Text>
                <HStack>
                  <Heading size="sm">Member Since:</Heading>
                  <Text> 30-01-1977</Text>
                </HStack>
                <HStack>
                  <Heading size="sm">Position:</Heading>
                  <Text>Developer</Text>
                </HStack>
            </VStack>
          </VStack>
        </CustomCard>
      </Middle>
    </FadeIn>
  );
};

export default Profile;
