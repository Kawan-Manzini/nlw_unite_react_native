import { View, Text, Image, StatusBar, Alert } from "react-native"
import { Input } from "@/components/input"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { colors } from "@/styles/colors"
import { Button } from "@/components/button"
import { Link, router } from "expo-router"
import { useState } from "react"

export default function Home() {
  const [code, setCode] = useState("")

  function handleAccessCredencial(){
    // if(!code.trim()){
    //   return Alert.alert("Ingresso", "Informe o codigo do ingresso!")
    // }
    router.push('/ticket')

  }
  return (
      <View className="bg-green-500 flex-1 items-center justify-center p-8 ">
        <StatusBar barStyle="light-content" />
        <Image source={require("@/assets/logo.png")} className="h-16" resizeMode="contain"/>
        <View className="w-full mt-12 gap-3 ">
            <Input>
            <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color={colors.green[200]}/>
              <Input.Field placeholder="Codigo do ingresso" onChangeText={setCode}/>
            </Input>
            <Button title="Acessar credencial" onPress={handleAccessCredencial}/>
            <Link href="/ticket" className="text-gray-100 text-base font-bold mt-8 text-center" >
              Ainda nao possui ingresso?
            </Link>
        </View>
      </View>
  )
}