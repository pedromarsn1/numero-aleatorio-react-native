import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';



export default function App() {

  const [numero, setNumero] = useState(0)

  function handleNumero() {

    const novo_numero = Math.floor((Math.random() * 10))
    setNumero(novo_numero)

  }

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.number}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={styles.button}>
          <Text style={styles.text}>
            Gerar Número
          </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  number: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 40
  }
});
