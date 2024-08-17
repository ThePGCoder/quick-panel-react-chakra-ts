
import { Flex } from "@chakra-ui/react";
import React from "react";
import ThemeToggle from "../../components/ThemeToggle";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Flex justify="flex-end" p={2}>
        <ThemeToggle />
      </Flex>
    </>
  );
};

export default Header;
