/*
 * TOUCHABLE BUTTON WITH COLORS
 */

import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

export default function IosInputButton({ btnText, btnColor, callBack }){
  return (

    <TouchableOpacity onPress={callBack}>
      <View style={{ paddingHorizontal : 50, paddingVertical : 15 }}>

        <Text style={{
          color : btnColor,
          fontSize : 19,
          fontWeight : 'bold'
        }}>
          {btnText}
        </Text>

      </View>
    </TouchableOpacity>
  )
};



