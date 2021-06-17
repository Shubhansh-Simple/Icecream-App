import React from 'react';

import { View,
         Text,
         TouchableOpacity,
         StyleSheet } from 'react-native';

import { Entypo }  from '@expo/vector-icons';
import commonStyle from '../Styles/commonStyle';

export default function NoDataFound({ title,
                                      description,
                                      emojiName,
                                      emojiSize,
                                      callBack }){
  return (
    <View style={commonStyle.centerContainer}>

      <Entypo name={emojiName} size={emojiSize} color='black' />

      <Text style={styles.titleStyle}>
        {title}
      </Text>

      <Text style={styles.descriptionStyle}>
        {description}
      </Text>

      <TouchableOpacity onPress={ ()=>callBack() }>
        <Text style={styles.retryBtn}>
          Retry
        </Text>
      </TouchableOpacity>

    </View>

  )
};

const styles = StyleSheet.create({

  titleStyle : {
    fontSize : 20,
    fontWeight : 'bold',
    paddingTop : 20,
  },

  descriptionStyle : {
    fontSize : 14,
  },

  retryBtn : {
    color : '#036ffc',
    fontSize : 18,
    paddingVertical : 10,
  }

})



