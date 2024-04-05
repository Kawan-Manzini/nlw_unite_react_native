import { View, Text, StatusBar } from 'react-native'
import React from 'react'

interface HeaderProps{
title: string
}

export default function Header({title}: HeaderProps) {
  return (
    <View className='w-full h-28 flex-row items-end bg-black/20 px-8 pb-4 border-b-white/10'>
      <Text className='flex-1 text-white font-medium text-lg text-center'>{title}</Text>
    </View>
  )
}