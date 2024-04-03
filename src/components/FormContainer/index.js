import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Form from "../Form";

export default function FormContainer(){
    return(
        <View style={styles.container}>
            <Form></Form>
        </View>
    )
}
