import { StyleSheet } from "react-native";
import { fonts } from "../../theme/fonts";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginTop: '20%',
        paddingLeft: 24
        
    },
    logo:{
        width: 44,
        height: 44,
    },
    h1:{
        color: '#fff',
        marginTop: '5%',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: fonts.type.ralewayBold
    },
    text:{
        color: '#fff',
        fontSize: 20
    }
})

export default styles