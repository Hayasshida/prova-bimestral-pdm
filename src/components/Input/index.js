import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

export function Input({ label, icon, containerStyle, ...rest }) {
  return (
    <View style={containerStyle}>
        { 
          label ? (
            <Text style={styles.label}>{label}</Text>
          ) : null
        }
        <View style={styles.container}>
          
          <TextInput 
            style={{
              flex: 1
            }}
            {...rest}
          />

        {
          icon ? (
            <View style={{marginLeft: 8}}>
              {icon}
            </View>
          ) : null
        }          
        </View>
    </View>
  )
}