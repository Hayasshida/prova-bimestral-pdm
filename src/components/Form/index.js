import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Form(){
    return(
        <View>
            <Text style={styles.textForm}>Email address</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.textForm} >Password</Text>
            <View style={styles.inputPass}>
                <TextInput style={styles.input}>
                <Icon name={'eye'} size={28} style={styles.eye} />
                </TextInput>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
            <View style={styles.actions}>
                <Text style={styles.textActions}>Sign Up</Text>
                <Text style={styles.textActions}>Forgot Password</Text>
            </View>
        </View>
    )
}