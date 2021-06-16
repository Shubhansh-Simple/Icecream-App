import React,{useEffect}  from 'react';
import {createIcecream} from '../Database/StarterFunction';

import { View, 
         Text,
         StyleSheet } from 'react-native';
export default function HomeScreen() {

  useEffect( ()=>{
    createIcecream()
  },[])

  return(
    <View style={styles.container}>
      <Text>Welcome to HomePage</Text>
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


