import 'react-native-gesture-handler';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import BrandView from './screens/brandview';
import Download from './screens/download'
import SplashScreen from 'react-native-splash-screen'


const Stack = createStackNavigator();

const App = () => {

  React.useEffect(()=> {
    SplashScreen.hide()
  })
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#a7ff83',
          },
          headerTitleStyle: {
            fontFamily: 'sansbold',
            fontSize: 20,
            color: 'black',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Gcamports'}}
        />
        <Stack.Screen
          name="BrandView"
          component={BrandView}
          options={{title: 'Gcamports'}}
        />
        <Stack.Screen
          name="Download"
          component={Download}
          options={{title: 'Gcamports'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

console.disableYellowBox = true;
