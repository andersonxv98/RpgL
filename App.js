import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import Employers from './Models/employer';
import RegisterView from './Views/registerView';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={labelStyle.titleText}>Employeers Registration</Text>
      <RegisterView msg="Message"></RegisterView>
      <StatusBar style="auto" />

    </View>
  );
}


const labelStyle = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
