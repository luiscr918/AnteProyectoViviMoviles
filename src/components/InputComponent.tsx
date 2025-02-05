import React, { useState } from 'react'
import { Button, KeyboardTypeAndroid, KeyboardTypeOptions, TextInput } from 'react-native'
import { INPUT_COLOR } from '../theme/commons/constant'
import { styles } from '../theme/appThemes'
interface Props{
    place:string;
    tipo?:KeyboardTypeOptions
    isPassword?:boolean
    handleChange:(name:string,value:string)=> void;
    name:string;
    
}

export const InputComponent = ({place,tipo='default',isPassword=false,handleChange,name}:Props) => {

  return (

    <TextInput 
    placeholder={place}
    keyboardType={tipo}
    style={styles.inputText}
    secureTextEntry={isPassword}
    onChangeText={(value)=>handleChange(name,value)}
    />


    
  )
}
