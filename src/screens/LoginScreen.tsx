import React, { useState } from 'react'
import { View, Text, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { TitleComponents } from '../components/TitleComponents';
import { PRIMARY_COLOR } from '../theme/commons/constant';
import { BodyComponents } from '../components/BodyComponents';
import { styles } from '../theme/appThemes';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//Definir Interfaz estructura formulario
interface LoginForm {
  email: string;
  password: string;
}
//definir interfaz para las propiedades
interface Props{
  users:User[];
}
export const LoginScreen = ({users}:Props) => {

  //hook useState permite manejar el estado del form
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: ''
  });
  //hook useNavegation permite navegar entre pantallas
  const navigation=useNavigation();
  //Funcion para manejar la captura y el cambio de los campos del formulario
  const handleChange = (name: string, value: string): void => {
    //Modificar la data del loginForm
    setLoginForm({ ...loginForm, [name]: value });
  }
  //Funcion para validar si existe el usuario
  const verifyUser=():User|undefined=>{
    //Buscar si el usuario existe en el arreglo users
    const existUser=users.find(user=>user.email===loginForm.email&&user.password===loginForm.password);
    return existUser;
  }

  //Funcion para ejecutar en el boton en este caso iniciar sesion
  const handleSendInfo = () => {
    //VERIFICAR SI EL FORMULARIO ESTA LLENO
    if (loginForm.email === '' || loginForm.password === '') {
      Alert.alert('Error Campos vacios ');
      return; //si verifica que alguno esta vacio me saca de una del metodo
    }
      //verificar si el usuario no existe
    if (!verifyUser()) {
      Alert.alert('Usuario y o contraseña incorrectas')
      return;
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
        <ButtonComponent title='Iniciar Sesión' handleLogin={handleSendInfo} />
        <TouchableOpacity 
        onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Register'}))}
        >
          <Text style={styles.textRedirect}>No tienes cuenta? Regístrate aquí</Text>
          
        </TouchableOpacity>
      </BodyComponents>



    </View>
  )
}
