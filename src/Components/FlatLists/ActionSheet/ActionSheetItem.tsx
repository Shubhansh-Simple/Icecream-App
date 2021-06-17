import React from 'react';

import { View, 
         Text, 
         TouchableOpacity,
         StyleSheet } from 'react-native';

// LOCAL
import StraightLine from '../../StraightLine';

export default function IcecreamItem({ icecreamName, perPiecePrice  }){
  return(
    <TouchableOpacity
      onPress={ ()=>{} 
    }>
      <View>
        <Text style={styles.flatlistItem}>
          {icecreamName} {perPiecePrice} Rs
        </Text>

        {/* St. Line */}
        <StraightLine
          color='#f0ede6'
          width={2}
        />
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  flatlistItem : {
    fontSize : 18,
    alignSelf : 'stretch',
    color : '#0095ff',
    padding : 10,
    textAlign : 'center',
  }
})

