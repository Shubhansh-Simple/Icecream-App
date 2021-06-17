/*
 * BACKGROUND MODAL COLOR
 * BECOME TRANSPARENT 
 * BLACK
 */ 

import React from 'react';
import { View, Modal } from 'react-native';

export function BlackBackground({ visible,setVisible }){

  return (
    <View>
      <Modal
        visible={visible}
        animationType='fade'
        transparent={true}
        onRequestClose={()=>setVisible(false)}
      >

        <View style={{
         flex : 1,
         backgroundColor : 'rgba(52,52,52,0.9)'
        }}>
        </View>

      </Modal>
    </View>
  )

};

