import React from 'react'
import { Text, View, StatusBar } from 'react-native';
import { PRIMARY_COLOR } from '../theme/commons/constant';
import { TitleComponents } from '../components/TitleComponents';

export const HomeScreen = () => {
  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponents title='Productos'/>

    </View>
  )
}
