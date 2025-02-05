import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appThemes'

//Definir las propiedades
interface Props{
    title:string
    handleLogin:()=>void
}

export const ButtonComponent = ({title,handleLogin}:Props) => {
    return (
        <TouchableOpacity 
        onPress={handleLogin}
        style={styles.buttonForm}>
            <Text style={styles.buttonFormText}>
                {title}
                
            </Text>
            
        </TouchableOpacity>
    )
}
