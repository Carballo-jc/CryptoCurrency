import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import CoinsStack from "./src/components/coins/CoinsStack";

export default function App() {
  return (
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
  );
}
