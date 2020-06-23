import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from "./screens/Profile";
import HomeScreen from "./screens/Home";

//TODO: Existen varios tipos de navegadores, el mas basico es el Stack Navigator: agrega rutas una arriba de la otra
// y cuando voy para atras las voy sacando

const Stack = createStackNavigator();

class AppContainer extends Component {
    render() {
        return (
            //TODO: Le configuro por prop cual es mi ruta inicial
            //TODO: Los Stack.Screen son como mis controllers/componentes que tenia en React
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen}/>
                    {/*<Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>*/}
                </Stack.Navigator>
            </NavigationContainer>
            //TODO: La linea comentada me esconde el header
        );
    }
}

export default AppContainer;