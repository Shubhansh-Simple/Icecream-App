import React from 'react';

import { View, 
         Text, 
         TouchableOpacity,
         StyleSheet } from 'react-native';

// LOCAL
import StraightLine from '../../StraightLine';

export default function IcecreamItem({ icecreamId, 
                                       icecreamName, 
                                       perPiecePrice, 
                                       perBoxPiece,
                                       totalPiece,
                                       callBack
                                    }){

  function icecreamNameSetter( icecreamId   : number,
                               icecreamName : string,
                               perPiecePrice: number, 
                               perBoxPiece  : number,
                             ){
     return {
       'icecreamId'   : icecreamId,
       'icecreamName' : icecreamName + ' ' + perPiecePrice.toString() + 'rs',
       'per_box_piece': perBoxPiece,
     }
  }

  return(
    <TouchableOpacity
      onPress={ ()=>callBack( icecreamNameSetter( icecreamId,
                                                  icecreamName,
                                                  perPiecePrice,
                                                  perBoxPiece,
                                                ))
    }>
      <View style={ styles.itemContainer }>
        <View style={{ flex : 2 }}>
          <Text style={styles.flatlistItem}>
            {icecreamName} 
          </Text>
        </View>
        <View style={{ flex : 1 }}>
          <Text style={styles.flatlistItem}>
            {perPiecePrice} Rs
          </Text>
        </View>

        { totalPiece &&
        <View style={{ flex : 1, justifyContent : 'center'}}>
            <Text style={[styles.flatlistItem, styles.pieceLeftStyle ]}>
              {totalPiece} left
            </Text>
          </View>
        }

      </View>
      {/* St. Line */}
      <StraightLine
        color='#f0ede6'
        width={2}
      />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  
  itemContainer : {
    flexDirection : 'row',
    justifyContent : 'space-around',
  },

  flatlistItem : {
    fontSize : 18,
    color : '#0095ff',
    padding : 10,
    textAlign : 'center',
  },

  pieceLeftStyle : {
    color     :'#393b39',
    fontSize  : 13,
    fontWeight: 'bold'
  },

})

