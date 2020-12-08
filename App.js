import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Camera from './component/Camera'

export default function App() {
  const [doitScanner, setDoitScanner] = useState(false);
  const [name, setName] = useState("");
  const [nameEnter,setNameEnter] = useState(false);
  const [newName, setNewName] = useState("");
  

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {doitScanner && <Camera></Camera>}
        {!doitScanner && <Button title={'tap to Scan'} onPress={() => setDoitScanner(true)}/>}
        {doitScanner && <Button title={'tap to descan'} onPress={()=> setDoitScanner(false)}/>}
    </View>
  );
}
