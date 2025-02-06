import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponents } from '../components/TitleComponents'
import { PRIMARY_COLOR } from '../theme/commons/constant'
import { BodyComponents } from '../components/BodyComponents'
import { styles } from '../theme/appThemes'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator'
//Definir interface estructura formulario(objeto)
interface Registerform {
    name: string;
    email: string;
    password: string;
}
//definir la interface para las propiedades
interface Props{
    users:User[];
    addUsers:(user:User)=>void
}



export const RegisterScreen = ({users,addUsers}:Props) => {
    //hook useState para manejar el estado del formulario
    const [registerForm, setRegisterForm] = useState<Registerform>({
        name: '',
        email: '',
        password: ''
    });
    //funcion para manekar la capruta y el cambio de los campos del formulario
    const handleChange = (name: string, value: string) => {
        /*  console.log(name, value); */
        //modificar la data del resgisterForm
        setRegisterForm({ ...registerForm, [name]: value });
    }
    //Funcion para validar si ya existe el usuario
    const verifyUser=():User|undefined=>{
        const existUser=users.find(user=>user.email===registerForm.email);
        return existUser;
    }
    //Funcion para Registrarme 
    const handleRegister = () => {
        //validar si el formulario esta lleno
        if (registerForm.name===''||registerForm.email===''||registerForm.password==='') {
            Alert.alert('ERROR','Todos los campos deben estar llenos');
            return;
        }
        //validar si el usuario ya existe
        if (verifyUser()) {
            Alert.alert('ERROR','El usuario ya existe')
            return;
        }
        console.log(registerForm);
    }
    //hook useNavegation permite navegar entre pantallas
    const navigation = useNavigation();

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponents title='Registrate' />
            <BodyComponents>
                <Text style={styles.titlePrincipal}>Unete a nosotros</Text>
                <Text style={styles.textDescription}>Realiza tus compras de manera rápida y segura</Text>
                <View style={styles.containerForm}>
                    <InputComponent place='Nombre'
                        tipo='default'
                        handleChange={handleChange}
                        name='name' />
                    <InputComponent place='Correo'
                        tipo='email-address'
                        handleChange={handleChange}
                        name='email' />
                    <InputComponent
                        place='Password'
                        handleChange={handleChange}
                        name='password' />
                </View>
                <ButtonComponent title='Registrarte' handleLogin={handleRegister} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}
                >
                    <Text style={styles.textRedirect}>Ya tienes una cuenta? Inicia Sesión aquí</Text>

                </TouchableOpacity>
            </BodyComponents>
        </View>
    )
}
