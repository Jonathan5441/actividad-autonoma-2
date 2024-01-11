import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config/config';

export default function LoginScreen({ navigation }: any) {
  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')

  function login() {
    signInWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('Acceso Correcto')
        navigation.navigate("Drawer_Welcome")
        setCorreo('');
        setContraseña('');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        switch (errorCode) {
          case 'auth/invalid-email':
            Alert.alert("ERROR", "Credenciales incorrectas");
            break;
          case 'auth/missing-password':
            Alert.alert("ERROR", "Contraseña incorrecta");
            break;
          default:
            Alert.alert("ERROR");
            break;
        }
        setCorreo('');
        setContraseña('');
      });
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Login</Text>
      <TextInput placeholder='Ingresar email' keyboardType='email-address' onChangeText={(texto) => setCorreo(texto) } value={correo}/>
      <TextInput placeholder='Ingresar contraseña' onChangeText={(texto) => setContraseña(texto)} value={contraseña}/>
      <Button title='Ingresar' onPress={() => login()} />

      <Text onPress={() => navigation.navigate('Registro')}> 👉 Regístrate aquí 👈</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})