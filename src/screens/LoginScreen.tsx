import React, { useState } from 'react'
import { View, Text, StatusBar, Alert } from 'react-native';
import { TitleComponents } from '../components/TitleComponents';
import { PRIMARY_COLOR } from '../theme/commons/constant';
import { BodyComponents } from '../components/BodyComponents';
import { styles } from '../theme/appThemes';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Definir Interfaz estructura formulario
interface LoginForm {
  email: string;
  password: string;
}
//Definir la interface de la estructura de mis objetos usuarios
interface User{
  id:number;
  name:string;
  email:string;
  password:string;
}
//definir arreglos con usuarios de prueba
const users:User[]=[
  {id:1,name:'Luis Castillo',email:'luiscast@gmail.com',password:'123'},
  {id:2,name:'Vianka Flores',email:'vinkyFlor@gmail.com',password:'123'},
]
export const LoginScreen = () => {

  //hook useState permite manejar el estado del form
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: ''
  });
  //Funcion para manejar la captura y el cambio de los campos del formulario
  const handleChange = (name: string, value: string): void => {
    //Modificar la data del loginForm
    setLoginForm({ ...loginForm, [name]: value });
  }
  //Funcion para iniciar Sesion
  const handleLogin = () => {
    if (loginForm.email === '' || loginForm.password === '') {
      Alert.alert('Error Campos vacios ');
      return; //si verifica que alguno esta vacio me saca de una del metodo

    }
    //verificar si cambio el estado del formulario
    console.log(loginForm);
  }
  //hook useState permite manejar el estado del password
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponents title='Iniciar Sesion' />
      <BodyComponents>
        <Text style={styles.titlePrincipal}>Bienvenido de Nuevo</Text>
        <Text style={styles.textDescription}>Realiza tus compras de manera rápida y segura</Text>
        <View style={styles.containerForm}>
          <InputComponent place='Correo' tipo='email-address' handleChange={handleChange} name='email' />
          <InputComponent
            place='Password'
            isPassword={hiddenPassword}
            handleChange={handleChange}
            name='password' />

          <Icon

            name={
              (hiddenPassword)
                ? 'visibility'
                : 'visibility-off'}
            color={PRIMARY_COLOR}
            size={20}
            style={styles.iconPassword}
            onPress={() => setHiddenPassword(!hiddenPassword)}
          />

        </View>
        <ButtonComponent title='Iniciar Sesión' handleLogin={handleLogin} />
      </BodyComponents>


    </View>
  )
}
