import React,{useEffect} from 'react'

import { View,
         Text,
         StyleSheet } from 'react-native';

// local
import { unitDecider } from '../../../CleanCode/CleanFunction';

// component
import { MaterialIcons } from '@expo/vector-icons'; 

export default function SaleStockItem({ sale_id, 
                                        icecream_name,
                                        per_box_piece,
                                        per_piece_price,
                                        sold_piece,
                                        is_active,
                                        totallingPiece,
                                        totallingBox,
                                        totallingPrice,
                                     }){

  // CODE REPEATITION
  //
  // Convert Piece into Boxes
  const total_boxes  = Math.floor(sold_piece/per_box_piece) 

  // Extract Remaining Pieces
  const total_pieces = sold_piece % per_box_piece

  useEffect( ()=>{
    totallingPiece( total_pieces )
    totallingPrice( sold_piece * per_piece_price )
    totallingBox( total_boxes )
  },[sale_id])

  return(
    <View style={styles.soldItemContainer}>

      <View style={{ flex : 3, 
                     alignItems : 'flex-start' }}>

        <Text style={ styles.icecreamNameStyle }>
          {
            total_boxes > 0 
              ? 
		    <MaterialIcons 
              name='check-circle' 
              size={14} 
              color='#1cc939' 
            />
              :
            '   '
          }
            {icecream_name}
          <Text style={ styles.unitStyle }>
            {'\n'}{'     '}({per_box_piece}nos x {per_piece_price}rs)
          </Text>
        </Text>
      </View>

      <View style={{ flex : 2, 
                     justifyContent : 'center' }}>
        <Text style={ styles.soldPieceStyle}>
          <Text style={ styles.icecreamPropertyStyle }>
            { unitDecider( total_boxes,'Box')   } 
            {' '}
            { unitDecider( total_pieces,'Piece') }
          </Text>
        </Text>
      </View>

      <View style={{ flex : 1, 
                     alignItems : 'flex-end', 
                     justifyContent : 'center' }}>
        <Text style={ styles.soldPieceStyle }>
          {sold_piece*per_piece_price} Rs
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  unitStyle : {
    fontSize  : 12,
    fontStyle : 'italic',
    color     : '#fe5f55',  // orange
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
    fontSize : 18,
    fontWeight : 'bold'
  },

  icecreamHighlight : {
    color : 'yellow',
  },

  icecreamPropertyStyle : {
    fontSize : 15,
    fontStyle : 'italic',
  },

  soldPieceStyle : {
    fontWeight : 'bold',
    fontSize : 14,
  },

})
