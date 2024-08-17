import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { darkGradient, darkShadow, lightGradient, lightShadow } from "../styles/constants";

interface CustomButtonProps {
  children: ReactNode;
  width?: string;
  onClick?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  
  onClick,
}) => {
  return (
    <>
      <Button
      fontWeight={useColorModeValue(500, 600)}
        onClick={onClick}
        
        bg={useColorModeValue(lightGradient, darkGradient)}
        color={useColorModeValue("white", "black")}
        _hover={{ boxShadow: useColorModeValue(lightShadow, darkShadow) }}
        _active={{ bg: useColorModeValue(lightGradient, darkGradient)}}
      >
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
