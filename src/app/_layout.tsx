// Importe suas folhas de estilo global CSS
import "../styles/global.css"

import React from 'react';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Loading } from '@/components/loading';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    // Se as fontes não foram carregadas ainda, você pode renderizar um carregamento ou
    // retornar null para evitar a renderização antes das fontes serem carregadas.
    return <Loading />;
  }

  // Se as fontes estiverem carregadas, renderize o Slot
  return (
    <>
      <Slot />
    </>
  );
}
