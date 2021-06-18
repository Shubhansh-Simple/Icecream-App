import React from 'react' ;

import { View, 
         TouchableOpacity,
         StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function Icon({ iconName,
                               iconSize,
                               color,
                               bgCircleColor,
                               callBack,
                            }){
  return (
    <TouchableOpacity 
      onPress={()=>callBack()}>
      <View style={[styles.iconStyle, {'backgroundColor' : bgCircleColor }]}>
        <MaterialIcons
          name ={iconName}
          size ={iconSize}
          color={color}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  iconStyle : {
    padding : 5,
    borderRadius : 50,
  },

})



