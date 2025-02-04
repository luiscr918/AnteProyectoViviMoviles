import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/appThemes'
//definir la interfaz de las propiedades
interface Props{
    title:string
}
export const TitleComponents = ({title}:Props) => {
    //hook para tamaño de pantalla
    const {height}=useWindowDimensions();
  return (
    <Text style={{...styles.title,
        height:height*0.12
    }}>{title}</Text>
  )
}
