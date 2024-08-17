import React from "react";
import Middle from "../../components/Middle";
import { Icon } from "@iconify/react";
import { Text, VStack } from "@chakra-ui/react";
import CustomCard from "../../components/CustomCard";
import FadeIn from "../../components/FadeIn";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <>
      <FadeIn>
        <Middle>
          <CustomCard>
            <VStack p={6}>
              <Icon
                icon="fluent:globe-error-16-filled"
                height={50}
                color="#E53E3E"
              />
              <Text>404: Not Found</Text>
            </VStack>
          </CustomCard>
        </Middle>
      </FadeIn>
    </>
  );
};

export default NotFound;
