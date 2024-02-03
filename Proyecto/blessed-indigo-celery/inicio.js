import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Barra superior */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Menú desplegable */}
        <TouchableOpacity onPress={() => console.log('Abrir menú')}>
          {/* Aquí debes colocar el icono de menú desplegable */}
          <Text>Menú</Text>
        </TouchableOpacity>
        
        {/* Título de la app */}
        <Text style={{ textAlign: 'center', fontSize: 18 }}>Hamburguesas Cowboys</Text>
        
        {/* Icono de carro de compras */}
        <TouchableOpacity onPress={() => console.log('Ir al carro de compras')}>
          {/* Aquí debes colocar el icono del carro de compras */}
          <Text>Carro</Text>
        </TouchableOpacity>
      </View>

      {/* Pregunta "¿Qué vas a comer hoy?" */}
      <Text style={{ fontSize: 20, marginTop: 40 }}>¿Qué vas a comer hoy?</Text>

      {/* Input de búsqueda */}
      <TextInput
        style={{ backgroundColor:'#DDDDDD',height: 40, marginTop: 5, marginBottom: 20, paddingLeft: 10,borderRadius:20, }}
        placeholder="Buscar..."
      />

      {/* Fila con Food, Drink, Snack y Source */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop: 20}}>
        <Text style={{ color:'red', borderBottomColor: 'red', borderBottomWidth: 2}} >Food</Text>
        <Text>Drink</Text>
        <Text>Snack</Text>
        <Text>Source</Text>
      </View>

      {/* Dos rectángulos con imágenes, títulos y precios */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 70,}}>
        {/* Rectángulo 1 */}
        <View style={{ backgroundColor: '#DDDDDD', width: 100, height: 200, margin: 15, alignItems: 'center', justifyContent: 'center',borderRadius:20 }}>
  <Image source={{ uri: 'https://cdn.forbes.com.mx/2023/05/dia-hamburguesa-e1684977814759.webp' }} style={{ width: 75, height: 75, marginBottom: 15 }} />
  <Text style={{ textAlign: 'center' }}>Cheese Burger</Text>
  <Text style={{ textAlign: 'center' }}>$8.09</Text>
</View>
        <View style={{ backgroundColor: '#DDDDDD', width: 100, height: 200, margin: 15, alignItems: 'center', justifyContent: 'center',borderRadius:20 }}>
  <Image source={{ uri: 'https://atodaburger.mx/wp-content/uploads/2022/07/PAPAS_EXTRA_BLOGNESA-scaled-e1658944489728.webp' }} style={{ width: 75, height: 75, marginBottom: 15 }} />
  <Text style={{ textAlign: 'center' }}>Papas Madres</Text>
  <Text style={{ textAlign: 'center' }}>$4.50</Text>
</View>
</View>

      {/* Navbar en la parte inferior */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', bottom: 0, width: '100%', borderTopWidth: 1, borderTopColor: 'gray' }}>
        {/* Campos o imágenes del Navbar */}
        <TouchableOpacity onPress={() => console.log('Ir a la sección 1')}>
          {/* Aquí debes colocar la imagen o icono de la sección 1 */}
          <Text>Sección 1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Ir a la sección 2')}>
          {/* Aquí debes colocar la imagen o icono de la sección 2 */}
          <Text>Sección 2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Ir a la sección 3')}>
          {/* Aquí debes colocar la imagen o icono de la sección 3 */}
          <Text>Sección 3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Ir a la sección 4')}>
          {/* Aquí debes colocar la imagen o icono de la sección 4 */}
          <Text>Sección 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
