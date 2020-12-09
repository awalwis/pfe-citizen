import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TextInput, AsyncStorage } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Camera from './component/Camera'
const CreateNew = (props)=>{
  const [name , setName] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    props.addNew(name)
  }
  return(
    <View>
      <Text>create a new name</Text>
      <TextInput onChangeText={text=>setName(text)}></TextInput>
      <Button title={'confirmer le nom'} onPress={handleSubmit}></Button>
    </View>
  )
}
export default function App() {
  const [doitScanner, setDoitScanner] = useState(false);
  const [name, setName] = useState("");
  const [nameEnter,setNameEnter] = useState(false);
  
  const addNew = (nom) =>{
    setName(nom)
    setNameEnter(true);
    try{
      AsyncStorage.setItem(
        '1',
        name
      )
    }catch (error){

    }
  }
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        setName(value)
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {!nameEnter && <CreateNew addNew={addNew}></CreateNew>}
        {doitScanner && <Camera></Camera>}
       
        {!doitScanner && nameEnter && <Button title={'tap to Scan'} onPress={() => setDoitScanner(true)}/>}
        {doitScanner && <Button title={'stop scan'} onPress={()=> setDoitScanner(false)}/>}
    </View>
  );
}
