import React from 'react';
import { Image, View, Text, TextInput, Button, ImageBackground, StyleSheet, SafeAreaView, Pressable, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants'

export default function Redefinir({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.logo}>
        <Image source={require('../assets/cadimia.png')} style={{height:150,width:150, borderRadius: 40}}/> 
      </View>
     <Text style={styles.rotulo}> Email</Text>
      <TextInput
        style={styles.input}
        keyboardType='email-address'
      />
       <Pressable onPress={() => navigation.navigate('Nutricao')}>
        <Text style={styles.salvar}>Salvar</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('paginaInicial')}>
          <Text style={styles.cancelar}>Cancelar</Text>
      </Pressable>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  marginTop: StatusBar.currentHeight || 0,    flex: 1,
    backgroundColor: 'white'
  },
  logo: { 
    flexDirection: 'row', justifyContent: 'center', maringTop:40,
  },
  rotulo: { 
    color: 'black', 
    paddingTop: 16,
    marginHorizontal:48,
    marginTop: 24, 
  },
  salvar: {
    position: 'relative',
    bottom: 15,
    padding: 11,
    marginTop:40,
    marginHorizontal: 300,
    marginBottom: 8,
    backgroundColor: '#FA6300',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 16,
  },
  cancelar: {
    position: 'relative',
    bottom: 15,
    padding: 11,
    margin: 8,
    backgroundColor: '#0073e6',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 16,
    marginTop: 24,
    marginHorizontal: 300,
  },
   input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 14,
    marginHorizontal: 24,
  },

});