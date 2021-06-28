import React,{useEffect} from 'react'

import { View,
         Text,
         StyleSheet } from 'react-native';

export default function SaleStockItem({ sale_id, 
                                        icecream_name,
                                        per_box_piece,
                                        per_piece_price,
                                        sold_piece,
                                        is_active,
                                        totallingPiece,
                                        totallingPrice,
                                     }){
  useEffect( ()=>{
    totallingPiece( sold_piece )
    totallingPrice( sold_piece * per_piece_price )
  },[sale_id])

  return(
    <View style={styles.soldItemContainer}>

      <View style={{ flex : 3, alignItems : 'flex-start' }}>
      <Text style={ styles.icecreamNameStyle }>
        {icecream_name}
        <Text style={ styles.unitStyle }>
          {' '}({per_box_piece}nos x {per_piece_price}rs)
        </Text>
      </Text>
      </View>

      <View style={{ flex : 1 }}>
        <Text style={ styles.soldPieceStyle}>
          {sold_piece} Piece
        </Text>
      </View>

      <View style={{ flex : 1 , alignItems : 'flex-end'}}>
        <Text style={ styles.soldPieceStyle }>
          {sold_piece*per_piece_price} Rs
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  unitStyle : {
    fontSize  : 11,
    fontStyle : 'italic',
  },

  soldItemContainer : {
    flexDirection  : 'row',
    alignSelf      : 'stretch',
    justifyContent : 'space-between',
    paddingHorizontal : 10,
    paddingVertical : 2,
  },
  salesDateStyle : {
    fontSize : 25,
    textAlign : 'center',
    textAlignVertical : 'bottom',
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
