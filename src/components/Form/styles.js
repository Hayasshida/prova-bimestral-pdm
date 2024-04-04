import React from "react";
import { StyleSheet } from "react-native";
import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d665f',
        borderRadius: 8,
        marginTop: 32
    },
    textLogin: {
        color: '#fff',
        fontFamily: fonts.type.ralewayBold
    },
    
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 92
    },
    textActions: {
        textDecorationLine: 'underline',
        textDecorationColor: colors.primary,
        color: colors.primary,
        fontFamily: fonts.type.ralewayBold
    },

})

export default styles