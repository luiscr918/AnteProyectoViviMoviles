import React, { useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponents } from '../components/TitleComponents'
import { PRIMARY_COLOR } from '../theme/commons/constant'
import { BodyComponents } from '../components/BodyComponents'
import { styles } from '../theme/appThemes'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'
//Definir interface estructura formulario(objeto)
interface Registerform {
    name: string;
    email: string;
    password: string;
}



export const RegisterScreen = () => {
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
    //Funcion para Registrarme 
    const handleRegister = () => {
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
