import React  from 'react';
import { View, 
         Text,
         StyleSheet } from 'react-native';

export default function CurrentStockScreen() {
  return(
    <View style={styles.container}>
      <Text>Welcome to CurrentStock Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    'flex' : 1,
    'justifyContent' : 'center',
    'alignItems' : 'center',
  },
})


