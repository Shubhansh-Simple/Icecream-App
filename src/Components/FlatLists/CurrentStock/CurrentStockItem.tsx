import React from 'react'
import { View,
         Text,
         TouchableOpacity,
         StyleSheet } from 'react-native';

import { MaterialIcons  } from '@expo/vector-icons';

import commonStyle from '../../../Styles/commonStyle';

export default function CurrentStockItem({ stock_id, 
                                           icecream_name,
                                           per_box_piece,
                                           per_piece_price,
                                           total_piece,
                                           deleteCallBack,
                                        }){

  const total_pieces = total_piece % per_box_piece
  const total_boxes  = Number( (total_piece/per_box_piece).toFixed() )

  function unitDecider( quantity:number, unit:string ){
    return (
      quantity !=0 && <Text>{quantity} {unit}</Text>
    ) 
  }

  return(
    <View style={ [styles.itemContainer]}>

      <TouchableOpacity onPress={ ()=>deleteCallBack(stock_id) }>
     
        <View style={ styles.stockContainerStyle }>

          <View style={{ flexDirection : 'row',
                         justifyContent : 'flex-start',
                         alignItems : 'center',
                      }}>

            <MaterialIcons 
              name='icecream'
              size={25}
              color='red'
              style={ styles.iconStyle }
            />
            <Text style={styles.titleStyle}>
              {icecream_name}
            </Text>

          </View>

          <Text style={[ styles.totalPieceStyle,commonStyle.blackBg ]}>
            { unitDecider( total_boxes,'Box')   } 
            {' '}
            { unitDecider( total_pieces,'Piece') }
          </Text>

        </View>

        <Text style={[ styles.miniText, commonStyle.blackBg ]}>
          {per_box_piece}Nos x {per_piece_price}rs
        </Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({

  itemContainer : {
    alignSelf : 'stretch',
    paddingVertical : 9,
    paddingLeft : 10,
    paddingRight : 5,
    backgroundColor : 'white',
    marginVertical : 2,
    borderRadius : 10,
  },

  stockContainerStyle : {
    flexDirection : 'row',
    justifyContent : 'space-between', 
    alignItems : 'center' 
  },

  iconStyle : {
    paddingRight : 5,
  },

  titleStyle : {
    fontSize : 25,
    marginVertical : 5,
  },

  totalPieceStyle : {
    fontSize : 20,
    fontStyle : 'italic',
    paddingHorizontal : 3,
    textAlign : 'center',
    textAlignVertical : 'center',
  },
  
  miniText : {
    fontSize : 11,
    paddingHorizontal : 2,
    alignSelf : 'flex-start',
    fontWeight : 'bold',
  },

})
