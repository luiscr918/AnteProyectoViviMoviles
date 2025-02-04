import React, { useState } from 'react'
import { Button, KeyboardTypeAndroid, KeyboardTypeOptions, TextInput } from 'react-native'
import { INPUT_COLOR } from '../theme/commons/constant'
import { styles } from '../theme/appThemes'
interface Props{
    place:string;
    tipo?:KeyboardTypeOptions
    
}

export const InputComponent = ({place,tipo='default'}:Props) => {
const [estadoInput, setEstadoInput] = useState<boolean>(false);
const esconderPassword=(texto:string)=>{
    if (texto=='Password') {
        setEstadoInput(true);
    }
}
  return (

    <TextInput 
    placeholder={place}
    keyboardType={tipo}
    style={styles.inputText}
    {()=>esconderPassword(place)}
    secureTextEntry={estadoInput}
    />


    
  )
}
