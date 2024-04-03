import { StatusBar } from "expo-status-bar"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Home() {
  return (
      <View className="bg-green-500 flex-1 items-center ">
        <Text className="text-white">
          Hello World!
        </Text>
      </View>
  )
}