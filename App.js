import { StatusBar } from 'expo-status-bar';
import React from 'react';
import OnboardingScreen from "./src/screens/OnboardingScreen";
import {screens} from './src/data/slides';


export default function App() {
  return (
    <>
      <OnboardingScreen
        slides={screens}
      />

      <StatusBar style="light" />
    </>
  );
}