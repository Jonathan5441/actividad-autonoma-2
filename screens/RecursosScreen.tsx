import { Button, StyleSheet, Text, View, Image, LogBox } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react'
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from '../config/config';

///
LogBox.ignoreAllLogs(true)
///

export default function RecursosScreen() {

  const [imagen, setImagen] = useState(' ');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagen(result.assets[0].uri);
    }
  };

  //subir imagen a storage
  async function subirImagen(nombre:String) {
    const storageRef = ref(storage, 'avatar/' + nombre);

    try {
        const response = await fetch(imagen);
        const blob = await response.blob();

        await uploadBytes(storageRef, blob, {
            contentType: 'image/jpg'
        });

        console.log('La imagen se subió con éxito');

        // Obtiene la URL de la imagen
        //const imageURL = await getDownloadURL(storageRef);
        //console.log('URL de desacarga de la imagen', imageURL);
    } catch (error) {
        console.error(error);
    }
}
    



  return (
    <View>
      <Text>Subir imagen desde la galería</Text>
      <Button title='Seleccionar Imagen' onPress={() => pickImage()} />
      <Image source={{ uri: imagen }} style={{ width: 250, height: 250 }} />

      <Button title='Cargar Imagen' onPress={() => subirImagen('avatar2')} />
    </View>
  )
}

const styles = StyleSheet.create({})