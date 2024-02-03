 import React, { useState } from 'react';
import { Text, View, TextInput, Button, ImageBackground, Image } from 'react-native';

const YourApp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/foto-gratis/fondo-borde-llama-imagen-fuego-realista-negro_53876-153392.jpg' }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Image
            source={{ uri: 'https://ruta-de-tu-imagen.com/tu-imagen.png' }}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          <Text style={{ color: 'white', fontSize: 28, marginBottom: 50 }}>Hamburguesas Cowboys</Text>
          
        </View>

        <Text style={{ color: 'white', fontSize: 20, marginBottom: 20 }}>Iniciar Sesión</Text>


        <TextInput
          placeholder="Usuario"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={{
            height: 40,
            borderBottomColor: 'red',
            borderBottomWidth: 1,
            marginBottom: 10,
            width: 200,
            color: 'white',
          }}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{
            height: 40,
            borderBottomColor: 'red',
            borderBottomWidth: 1,
            marginBottom: 20,
            width: 200,
            color: 'white',
          }}
        />
        <Button title="Login" onPress={handleLogin} color="red" />

        
        <Text style={{ color: 'white', fontSize: 14, marginTop: 20 }}>
          ¿No tienes cuenta? Pulsa aquí para registrarte
        </Text>

        {/* Imágenes de vinculación con la cuenta */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png' }}
            style={{ width: 50, height: 50 }}
          />
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/023/986/999/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png' }}
            style={{ width: 50, height: 50 }}
          />
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png' }}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default YourApp;
