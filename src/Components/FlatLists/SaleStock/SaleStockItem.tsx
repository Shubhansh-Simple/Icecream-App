import React from 'react'

import { View,
         Text,
         TouchableOpacity,
         StyleSheet } from 'react-native';

import Icon        from '../../Buttons/Icon';
//import commonStyle from '../../../Styles/commonStyle';

export default function SaleStockItem({ sale_id, 
                                        icecream_name,
                                        per_box_piece,
                                        per_piece_price,
                                        sold_piece,
                                        is_active,
                                     }){

  //// Convert Piece into Boxes
  //const total_boxes  = Math.floor(total_piece/per_box_piece) 

  //// Extract Remaining Pieces
  //const total_pieces = total_piece % per_box_piece


  //function unitDecider( quantity:number, unit:string ){
  //  return (
  //    quantity !=0 && <Text>{quantity} {unit}</Text>
  //  ) 
  //}

  return(
    <View style={styles.soldItemContainer}>
      <Text style={ styles.icecreamNameStyle }>
        {icecream_name}
        <Text style={ styles.unitStyle }>
          {' '}({per_box_piece}nos x {per_piece_price}rs)
        </Text>
      </Text>
      <Text style={ styles.soldPieceStyle}>
        {sold_piece} Piece
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

  unitStyle : {
    fontSize : 11,
  },

  soldItemContainer : {
    flexDirection  : 'row',
    alignSelf      : 'stretch',
    justifyContent : 'space-between',
    paddingHorizontal : 10,
  },
  salesDateStyle : {
    fontSize : 25,
    textAlign : 'center',
  },

  icecreamNameStyle : {
    fontSize : 17,
    fontWeight : 'bold'
  },

  soldPieceStyle : {
    fontWeight : 'bold',
    fontSize : 13
  },

})
