/*
 * Icecream ListView
 * Container
 */
import React  from 'react';

import { View, 
         FlatList,
         StyleSheet } from 'react-native';

import IcecreamItem   from './IcecreamItem';

export default function IcecreamContainer({ icecreamListData }){
  return(
    <View style={styles.screenContainer}>

      <FlatList
        data={icecreamListData}
        keyExtractor={ item=>item.id.toString() }
        showsVerticalScrollIndicator={false}
        renderItem={ (el)=>{
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

const styles = StyleSheet.create({

  screenContainer : {
    flex : 1,
    paddingHorizontal : 15,
    backgroundColor : '#e6e6e6',
  },

})

