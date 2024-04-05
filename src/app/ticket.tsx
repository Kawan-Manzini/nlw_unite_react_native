import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '@/components/header'
import Credential from '@/components/credential' 
import {FontAwesome} from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Button } from '@/components/button'
export default function ticket() {
  return (
    <View className='flex-1 bg-green-500'>
      <StatusBar barStyle="light-content" />
      <Header title="Minha Credencial!"/>
      <ScrollView className='-mt-28 -z-10' contentContainerClassName='px-8 pb-8'>
      <Credential />
      <FontAwesome name='angle-double-down' size={24} color={colors.gray[300]} className='self-center my-6'/>
      <Text className='text-white font-bold text-2xl mt-4'>
        Compartilhar credencial
      </Text>
      <Text className='text-white font-regular text-base mt-1 mb-6'>
        Mostre ao mundo que voce vai participar do Unite Summit!
      </Text>

      <Button title='Compartilhar'/>
      <TouchableOpacity activeOpacity={0.7} className='mt-10'>
        <Text className='text-base text-white font-bold text-center'>
          Remover ingresso
        </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}