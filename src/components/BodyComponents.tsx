import React, { ReactNode } from 'react'
import { View, Text, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appThemes';

interface Props{
  children:ReactNode; //Permite que el contenedor resiva cualquier componente
}

export const BodyComponents = ({children}:Props) => {
    //hook useWindows dimensions
    const {height}=useWindowDimensions();
  return (
    <View style={{
        ...styles.body,
        height:height*0.88
        }}>
            {children}

    </View>
  )
}
