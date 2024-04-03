import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { useFonts, Raleway_100Thin, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { StyleSheet } from "react-native";

export default function Welcome(){
    const [fonteLoaded] = useFonts({
        Raleway_100Thin,
        Raleway_700Bold
    })
    
    if(!fonteLoaded){
        return null
    }

    return(
        <View style={styles.container}>
                <Image
                    source={require('../img/trevo.png')}
                    style={styles.logo}
                />
                <Text style={styleText.h1}>Welcome</Text>
                <Text style={styleText.text}>Sign in to continue</Text>
        </View>
    )
}

const styleText = StyleSheet.create({
    h1:{
        fontFamily: 'Raleway_700Bold',
        fontSize: 32,
        color: '#fff',
        marginTop: '5%',
    },
    text:{
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Raleway_700Bold'
    }
})
