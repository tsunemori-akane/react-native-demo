import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation";

import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC0N4nVmqhSztfXSU4n1AwvyBf4FY9POnE",
  authDomain: "mealtogo-c5826.firebaseapp.com",
  projectId: "mealtogo-c5826",
  storageBucket: "mealtogo-c5826.appspot.com",
  messagingSenderId: "1011233644614",
  appId: "1:1011233644614:web:4a535d0d2d1c1e2f18aa47",
  measurementId: "G-6JXZFDDF6F",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
