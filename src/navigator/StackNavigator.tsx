import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../theme/commons/constant';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen';
//Definir la interface de la estructura de mis objetos usuarios
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}
//definir arreglos con usuarios de prueba
const users: User[] = [
    { id: 1, name: 'Luis Castillo', email: 'luiscast@gmail.com', password: '123' },
    { id: 2, name: 'Vianka Flores', email: 'vinkyFlor@gmail.com', password: '123' },
]

export const StackNavigator = () => {
    const Stack = createStackNavigator();
    //hook usestate permitir controlar el estadcos de los usuarios
    const [userManager, setUserManager] = useState<User[]>(users);

    //Funcion para agregar usuraios al arreglo useManager
    const addUsers=(user:User):void=>{
        //Agregar nuevos usuarios al usersManager
        setUserManager([...userManager,user]);
    }

    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: PRIMARY_COLOR,
            }
        }}>
            <Stack.Screen name="Login"
                options={{ headerShown: false }}
                children={()=><LoginScreen users={userManager}/>} />

            <Stack.Screen name="Register"
                options={{ headerShown: false }}
                children={()=><RegisterScreen users={userManager} addUsers={addUsers} />} />

                <Stack.Screen name="Home"
                options={{ headerShown: false }}
                component={HomeScreen} 
                />
        </Stack.Navigator>
    );
}