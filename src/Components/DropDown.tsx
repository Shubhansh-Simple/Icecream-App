import React from 'react';

import { Text,
         View,
         StyleSheet,
         TouchableOpacity } from 'react-native';

import Icon        from './Buttons/Icon';

export default function DropDown({ title,
                                   iconName,
                                   iconSize,
                                   iconColor,
                                   bgCircleColor,
                                   callBack 
                                }){
  return (
    <TouchableOpacity onPress={callBack}>
      <View style={ styles.dropDownStyle }>
        <Text style={{ fontSize : 25, paddingHorizontal : 6 }}>
          {title}
        </Text>
        <Icon
          iconName={iconName}
          iconSize={iconSize}
          color={iconColor}
          bgCircleColor={bgCircleColor}
          callBack={()=>{}}
        />
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({

  dropDownStyle : {
    flexDirection : 'row', 
    justifyContent : 'center',
    marginVertical : 5
  }
})


