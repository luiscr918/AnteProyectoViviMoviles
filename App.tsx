
import { LoginScreen } from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';

const  App=()=> {
  return (
    <NavigationContainer >
      <StackNavigator/>
    </NavigationContainer>
  );
}
export default App;

