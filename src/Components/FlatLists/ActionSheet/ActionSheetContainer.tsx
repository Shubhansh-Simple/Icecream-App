import React  from 'react';

import { View, 
         FlatList,
         StyleSheet } from 'react-native';

import ActionSheetItem from './ActionSheetItem';

export default function ActionSheetContainer({ actionSheetListData }){
  return(
    <View style={styles.modalBody}>
      <FlatList
        data={actionSheetListData}
        showsVerticalScrollIndicator={false}
        keyExtractor={ item=>item.id.toString() }
        renderItem={(el)=>{
          return(
            <ActionSheetItem
              icecreamName  ={el.item.icecream_name}
              perPiecePrice ={el.item.per_piece_price}
            />
          )
        }}
      />
    </View>
  )
};

const styles=StyleSheet.create({

  modalBody:{
    alignItems : 'stretch',
    padding    : 4,
  },

})


