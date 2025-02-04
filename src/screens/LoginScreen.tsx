import React from 'react'
import { View, Text, StatusBar } from 'react-native';
import { TitleComponents } from '../components/TitleComponents';
import { PRIMARY_COLOR } from '../theme/commons/constant';
import { BodyComponents } from '../components/BodyComponents';
import { styles } from '../theme/appThemes';
import { InputComponent } from '../components/InputComponent';


export const LoginScreen = () => {
  return (
    <View>
        <StatusBar  backgroundColor={PRIMARY_COLOR}/> 
    <TitleComponents title='Iniciar Sesion'/>
    <BodyComponents>
        <Text style={styles.titlePrincipal}>Bienvenido de Nuevo</Text>
        <Text style={styles.titleDescription}>Realiza tus compras de manera rápida y segura</Text>
        <InputComponent place='Correo' tipo='email-address' />
        <InputComponent place='Password'  />
    </BodyComponents>

    </View>
  )
}
