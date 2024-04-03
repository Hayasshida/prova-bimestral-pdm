import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#336f6599',
        borderRadius: 8,
        height: 48,
        marginTop: 8,
        fontSize: 20,
        paddingStart: 8,
        marginBottom: 30,
        width: '100%',
    },
    button: {
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d665f',
        borderRadius: 8,
    },
    textLogin: {
        color: '#fff',
        fontFamily: 'Raleway_700Bold'
    },
    textForm: {
        fontFamily: 'Raleway_700Bold',
        color: '#336F65'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 92
    },
    textActions: {
        textDecorationLine: 'underline',
        textDecorationColor: '#336F65',
        color: '#336F65'
    },
    inputPass: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'flex-end'
    },
})

export default styles