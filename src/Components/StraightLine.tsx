import React from 'react';
import {View} from 'react-native';

export default function StraightLine({color, width}){
  return (
    <View style={{
      borderBottomColor : color,
      borderBottomWidth : width,
      alignSelf : 'stretch',
    }}>
    </View>
  )
}

