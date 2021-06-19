import React from 'react' ;

import { View, 
         Text,
         TouchableOpacity,
         StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function Icon({ iconName,
                               iconSize,
                               color,
                               bgCircleColor,
                               bottomTitle,
                               callBack,
                            }){
  return (
    <TouchableOpacity 
      onPress={()=>callBack()}>
      <View style={[ styles.iconStyle, 
                     {'backgroundColor' : bgCircleColor}
                  ]}>
        <MaterialIcons
          name ={iconName}
          size ={iconSize}
          color={color}
        />
      </View>
      { bottomTitle 
          && 
        <Text style={ styles.iconTextStyle }>{bottomTitle}</Text> 
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  iconStyle : {
    padding : 5,
    borderRadius : 50,
    alignItems : 'center'
  },

  iconTextStyle : {
    fontSize : 10,
    textAlign : 'center',
    fontWeight : 'bold',
  },

})



