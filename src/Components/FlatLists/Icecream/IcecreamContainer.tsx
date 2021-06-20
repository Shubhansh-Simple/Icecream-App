/*
 * Icecream ListView
 * Container
 */
import React  from 'react';

import { View, 
         FlatList } from 'react-native';

import IcecreamItem   from './IcecreamItem';
import commonStyle    from '../../../Styles/commonStyle';

export default function IcecreamContainer({ icecreamListData }){
  return(
    <View style={commonStyle.screenContainer}>

      <FlatList
        data        ={icecreamListData}
        keyExtractor={ item=>item.id.toString() }
        showsVerticalScrollIndicator={false}
        renderItem  ={ (el)=>{
          return(
            <IcecreamItem 
              icecream_name   ={el.item.icecream_name}
              per_piece_price ={el.item.per_piece_price}
              per_box_piece   ={el.item.per_box_piece}
              supplier_commission={el.item.supplier_commission}
            />
          ) 
        }}
      />
    </View>
  )
};

