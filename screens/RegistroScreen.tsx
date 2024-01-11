import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export default function RegistroScreen({ navigation }: any) {
  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')

  function register() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        navigation.navigate('Login')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <View>
      <Text>RegistroScreen</Text>
      <TextInput placeholder='Ingresar email' keyboardType='email-address' onChangeText={(texto)=>setCorreo(texto)}/>
      <TextInput placeholder='Ingresar contraseña' onChangeText={(texto)=>setContraseña(texto)}/>
      <Button title='Ingresar' onPress={() => register()} />
    </View>
  )
}

const styles = StyleSheet.create({})