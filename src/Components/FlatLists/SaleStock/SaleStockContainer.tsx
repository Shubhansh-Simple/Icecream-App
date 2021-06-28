/*
 * Sale Stock ListView
 * Container
 */

import React from 'react';

import { View,
         StyleSheet,
         FlatList } from 'react-native';

import SaleStockItemContainer from './SaleStockItemContainer';

export default function SaleStockContainer({ saleStockList }){

  /*
   * DATE WISE 
   * ITERATION
   */
  return(
    <View style={ styles.soldItemMainContainer }>
    <FlatList
      data         ={saleStockList}
      keyExtractor ={ item=>item.icecreamList[0] }
      showsVerticalScrollIndicator={false}
      renderItem   ={ (el)=>{
        return(
          <SaleStockItemContainer
            entry_date       = { el.item.icecreamList[0] }
            dateIcecreamList = { el.item.icecreamList[1] }
          />
        )}
      }
    />
    </View>
  )
};
const styles = StyleSheet.create({
  soldItemMainContainer : {
    flex : 1, 
    alignSelf : 'stretch',
    marginHorizontal : 15,
  }, 
})


