import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { StyleSheet } from "react-native";
import { fonts } from "../../theme/fonts";

export default function Welcome(){
    
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
        fontFamily: fonts.type.ralewaySemibold,
        fontSize: 28,
        color: '#fff',
        marginTop: 24,
    },
    text:{
        color: '#fff',
        fontSize: 20,
        fontFamily: fonts.type.ralewayMedium,
        marginTop: 10
    }
})
