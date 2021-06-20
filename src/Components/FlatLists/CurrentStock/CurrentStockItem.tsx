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

  function unitDecider(data:number,text:string){
    return ( data
              ?
             <Text style={ styles.totalPieceStyle }>
               {data} {text} 
             </Text>
              :
             null
           )
  }

  return(
    <View style={ [styles.itemContainer, commonStyle.shadow ]}>

      <TouchableOpacity onPress={ ()=>deleteCallBack(stock_id) }>
     
        <View style={ styles.stockContainerStyle }>

          <MaterialIcons 
            name='icecream'
            size={40}
            color='red'
            style={ styles.iconStyle }
          />
          <Text style={styles.titleStyle}>
            {icecream_name}
          </Text>

          <View style={{ top : 5}}>
            { unitDecider(total_boxes, 'Box  ')   }
            { unitDecider(total_pieces,'Piece') }
          </View>

        </View>

        <Text style={styles.miniText}>
          ({per_box_piece}Nos x {per_piece_price}rs)
        </Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({

  itemContainer : {
    alignSelf : 'stretch',
    paddingVertical : 5,
    paddingHorizontal : 2,
    backgroundColor : 'white',
    marginVertical : 3,
    borderRadius : 10,
  },

  stockContainerStyle : {
    flexDirection : 'row',
    justifyContent : 'space-between', 
    alignItems : 'center' 
  },

  iconStyle : {
  },

  titleStyle : {
    fontSize : 25,
    marginVertical : 5,
    fontFamily : 'sans-serif-medium'
  },

  totalPieceStyle : {
    fontSize : 15,
    color : '#24a647',
    fontWeight : 'bold',
    paddingHorizontal : 2,
    borderRadius : 5,
    backgroundColor : '#323834',
    borderBottomWidth : 1,
    borderBottomColor : 'silver',
    textAlign : 'center',
    textAlignVertical : 'center',
  },
  
  miniText : {
    fontSize : 11,
    fontWeight : 'bold',
  },

})
