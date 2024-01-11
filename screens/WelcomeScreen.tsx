import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getAuth, signOut } from 'firebase/auth';

export default function WelcomeScreen({ navigation }: any) {
  function cerrarsesion(){
  const auth = getAuth();
  signOut(auth).then(() => {
    navigation.navigate('Login')
    console.log('se cerro la sesion')
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  })};
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title='Ingresar' onPress={() => cerrarsesion()} />
    </View>
  )
}

const styles = StyleSheet.create({})