import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

let numero = Math.floor(Math.random() * 100) + 1;

export default function App() {

  let [arvatut, setArvatut] = useState(0);

  let [arvaus, setArvaus] = useState('');

  const [teksti, setTeksti] = useState('Guess a number between 1-100');

  const buttonPressed = () => { 
    let arvattuNro = parseInt(arvaus);

      if (numero < arvattuNro) {
        setTeksti('Your guess ' + arvaus + ' is too big');
        setArvatut (arvatut+ 1);
      }
      else if (numero > arvattuNro) {
        setTeksti('Your number ' + arvaus + ' is too small');
        setArvatut (arvatut+ 1);
      }
      else {
        setTeksti('Correct! It took you ' + (arvatut + 1) + ' guesses');
      }
    };

  return (
    <View style={styles.container}>
      <Text>{teksti}</Text> 
      <TextInput inputMode='numeric' style={styles.input} onChangeText={arvaus => setArvaus(arvaus)} value={arvaus}/>
  
      <View style={styles.button} >
      <Button onPress={buttonPressed} title="MAKE A GUESS" />
      </View>
      <StatusBar style="auto" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  },
  button : {
    flexDirection: 'row',
    backgroundColor: 'pink',
    marginTop: 5,
  },
}
);