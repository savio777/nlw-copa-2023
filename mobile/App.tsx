import React from "react";

import { NativeBaseProvider, StatusBar } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/styles/theme";
import Loading from "./src/components/Loading";
import Signin from "./src/screens/Signin";

export default function App() {
  const [fontsIsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {fontsIsLoaded ? <Signin /> : <Loading />}

      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
    </NativeBaseProvider>
  );
}
