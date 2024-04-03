
// Import your global CSS file
import "../styles/global.css"

import { Slot } from 'expo-router'
import { StatusBar } from "expo-status-bar"
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto'
import { Loading } from '@/components/loading'

export default function Layout() {
  const [fontsLoaded] = useFonts([
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  ])



  return (<>
    <StatusBar style="light" />
    {fontsLoaded ? <Slot /> : <Loading />  }
    
  </>)
}