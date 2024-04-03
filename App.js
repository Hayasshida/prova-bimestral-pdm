import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import FormContainer from './src/components/FormContainer';
import Welcome from './src/components/Welcome';

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/components/img/bgwelcome.png')}
        style={styles.bgImage}
      >
        <Welcome></Welcome>
      </ImageBackground>
      <FormContainer></FormContainer>
      <StatusBar style="auto" />
    </View>
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
