import React from "react";
import THEME from "./src/theme";
import AppLoading from "expo-app-loading";
import { Home } from "./src/screens/Home";
import { ThemeProvider } from 'styled-components/native'
import { 
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { StatusBar} from 'expo-status-bar'
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar 
        style="light"
        translucent
        backgroundColor="transparent"
      />
        <Home />
    </ThemeProvider>

  );
}
;
