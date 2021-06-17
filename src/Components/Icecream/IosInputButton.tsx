import React from 'react';

import { Text, View } from 'react-native';

export default function IosInputButton({ btnText, btnColor }){
  return (
    <View style={{ paddingHorizontal : 50, paddingVertical : 15 }}>

      <Text style={{
        color : btnColor,
        fontSize : 19,
        fontWeight : 'bold'
      }}>
        {btnText}
      </Text>

    </View>
  )
};



