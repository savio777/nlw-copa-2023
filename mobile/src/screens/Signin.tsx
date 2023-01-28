import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, VStack } from "native-base";

const Signin = () => (
  <VStack
    flex={1}
    bgColor="gray.900"
    alignItems="center"
    justifyContent="center"
  >
    <Text
      color="green.500"
      textAlign="center"
      minHeight={10}
      fontSize={24}
      fontFamily='heading'
    >
      Signin
    </Text>
  </VStack>
);

export default Signin;
