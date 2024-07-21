import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";
import CreateTripContext from "../context/CreateTripContext.js";

export default function RootLayout() {
  useFonts({
    "outfit":require('.././assets/fonts/Outfit-Regular.ttf'),
    "outfit-medium":require('.././assets/fonts/Outfit-Medium.ttf'),
    "outfit-bold":require('.././assets/fonts/Outfit-Bold.ttf'),
  });

  const [tripData,setTripData]=useState([]);

  return (
    <CreateTripContext.Provider value={{tripData,setTripData}}>
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)" />
    </Stack>
    </CreateTripContext.Provider>
  );
}
