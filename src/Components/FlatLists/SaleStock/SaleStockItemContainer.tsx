/*
 * Sale Stock ListView
 * Container
 */

import React from 'react';

import { View,
         Text,
         StyleSheet,
         FlatList } from 'react-native';

import SaleStockItem from './SaleStockItem';
import commonStyle   from '../../../Styles/commonStyle';

export default function SaleStockItemContainer({ entry_date, 
                                                 dateIcecreamList
                                              }){

  return(
    <View style={[styles.saleScreenContainer, commonStyle.shadow ]}>
      <Text style={styles.salesDateStyle}>
        {entry_date}
      </Text>

      <View style={{ flexDirection  : 'row',  
                     justifyContent : 'space-between',
                     paddingVertical: 5,
                     paddingHorizontal : 10,
                  }}>
        <Text>Icecreams</Text>
        <Text>Sale</Text>
      </View>

      <FlatList
        data         ={dateIcecreamList}
        keyExtractor ={ item=>item.id.toString() }
        showsVerticalScrollIndicator={false}
        renderItem   ={ (el)=>{
          return(
            <SaleStockItem
              sale_id        ={el.item.id}
              icecream_name  ={el.item.icecream_name}
              per_box_piece  ={el.item.per_box_piece}
              per_piece_price={el.item.per_piece_price}
              sold_piece     ={el.item.sold_piece}
              is_active      ={el.item.is_active}
            />
          )}
        }
      />
    </View>
  )
};
const styles = StyleSheet.create({
  saleScreenContainer : {
    marginVertical : 10,
    backgroundColor: 'white',
  },
  soldItemContainer : {
    flexDirection  : 'row',
    alignSelf : 'stretch',
    justifyContent : 'space-between'
  },
  salesDateStyle : {
    fontSize : 25,
    textAlign : 'center',
  },
})


