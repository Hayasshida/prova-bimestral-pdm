import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from "../Input";

import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../theme/colors";

export default function Form(){

    const [isPasswordTextVisible, setIsPasswordTextVisible] = useState(false)

    return(
        <View>
            <Input label="Email address" containerStyle={{
                marginBottom: 20
            }}
            autoCapitalize="none"
            /> 

            <Input 
                label="Password" 
                icon={
                    <TouchableOpacity onPress={() => {
                        setIsPasswordTextVisible(!isPasswordTextVisible)
                    }} activeOpacity={0.7}>
                        <Ionicons name={isPasswordTextVisible ? "eye-off" : "eye"} size={20} color={colors.primary}/>
                    </TouchableOpacity>
                } 
                secureTextEntry={!isPasswordTextVisible}
            /> 

           {/*  <Text style={styles.textForm}>Email address</Text>
            <TextInput style={styles.input}/>

            <Text style={styles.textForm}>Password</Text>
            <View style={styles.inputPass}>
                <TextInput style={styles.input}>
                <Icon name={'eye'} size={28} style={styles.eye} />
                </TextInput>
            </View> */}


            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>


            <View style={styles.actions}>
            <TouchableOpacity  activeOpacity={0.7}>
                <Text style={styles.textActions}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.7}>
                <Text style={styles.textActions}>Forgot Password</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}