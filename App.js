import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import FormContainer from './src/components/FormContainer';
import Welcome from './src/components/Welcome';
import { useFonts, Raleway_100Thin, Raleway_700Bold, Raleway_600SemiBold, Raleway_500Medium } from "@expo-google-fonts/raleway";

export default function App() {


  const [fonteLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold
})

if(!fonteLoaded){
    return null // TODO: colocar o loading
}

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="light" />

      <ImageBackground
        source={require('./src/components/img/bgwelcome.png')}
        style={styles.bgImage}
      >
        <Welcome />
      </ImageBackground>
  
      <FormContainer />
  
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  bgImage:{
    flex: 1,
  },
});
