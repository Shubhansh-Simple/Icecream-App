import React from 'react';

import { View, 
         Text, 
         TouchableOpacity,
         StyleSheet } from 'react-native';

// LOCAL
import StraightLine     from '../../StraightLine';
import {redBlackChoice}  from '../../../CleanCode/CleanFunction';

export default function IcecreamItem({ stockId, 
                                       icecreamId, 
                                       icecreamName, 
                                       perPiecePrice, 
                                       perBoxPiece,
                                       totalPiece,
                                       callBack
                                    }){

  function icecreamNameSetter(){
     return {
         'icecream_id'    : icecreamId,
         'icecream_name'  : icecreamName + ' ' + perPiecePrice.toString() + 'rs',
         'per_piece_price': perPiecePrice,
         'per_box_piece'  : perBoxPiece,
       }
     }
  
    function icecreamStockSetter(){
      return {
        'stock_id'   : stockId,
        'total_piece': totalPiece,
        'icecream'   : icecreamNameSetter()
      }  
    }

  return(
    <TouchableOpacity
      onPress={ ()=>callBack( icecreamStockSetter() )
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

        <View style={{ flex : 1, justifyContent : 'center'}}>
            <Text style={[styles.flatlistItem, redBlackChoice(totalPiece) ]}>
              {totalPiece} left
            </Text>
        </View>

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

