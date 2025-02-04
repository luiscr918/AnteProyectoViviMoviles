import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appThemes';

export const BodyComponents = (props:any) => {
    //hook useWindows dimensions
    const {height}=useWindowDimensions();
  return (
    <View style={{
        ...styles.body,
        height:height*0.88
        }}>
            {props.children}

    </View>
  )
}
