import React, {Component} from 'react';
import {Text, View, Button} from "react-native";

class HomeScreen extends Component {
    render() {
        return(
            //TODO: View es analogo al "div" de React
            //TODO: Una view es cualquier cosa que sea un contenedor de elementos o vacio
            <View>
                <Text>Inicio</Text>
                <Button onPress={() => this.props.navigation.navigate('Profile')} title={"Mi Perfil"}/>
            </View>
            //TODO: Cuando apriteo el boton navego hasta "profile"
            //TODO: Los Text, Button, y en geral todos los elementos son distintos a los de html
        )
    }
}

export default HomeScreen;