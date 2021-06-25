/*
 * Current Stock ListView
 * Container
 */

import React from 'react';

import { View,
         FlatList } from 'react-native';

import CurrentStockItem from './CurrentStockItem';
import commonStyle from '../../../Styles/commonStyle';

export default function CurrentStockContainer({ currentStockList,
                                                deleteCallBack
                                             }){
  return(
    <View style={ commonStyle.screenContainer }>

      <FlatList
        data         ={currentStockList}
        keyExtractor ={ item=>item.id.toString() }
        showsVerticalScrollIndicator={false}
        renderItem   ={ (el)=>{
          return(
            <CurrentStockItem
              stock_id       ={ el.item.id }
              icecream_name  ={ el.item.icecream_name}
              per_piece_price={ el.item.per_piece_price}
              per_box_piece  ={ el.item.per_box_piece}
              total_piece    ={ el.item.total_piece}
              deleteCallBack ={ (id:number)=>deleteCallBack(id)}
            />
          )}
        }
      />
    </View>
  )
};


