import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Camera from './component/Camera'

export default function App() {
  const [doitScanner, setDoitScanner] = useState(false);


  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        {doitScanner && <Camera></Camera>}
        {!doitScanner && <Button title={'to Scan Again'} onPress={() => setDoitScanner(true)}/>}
    </View>
  );
}
