import React  from 'react';

import { View, 
         FlatList,
         StyleSheet } from 'react-native';

import ActionSheetItem from './ActionSheetItem';

import {window}    from '../../../CleanCode/CleanVaraible';

export default function ActionSheetContainer({ actionSheetListData, 
                                               callBack }){
  return(
    <View style={[styles.modalBody, {'height' : window.screenHeight/3.2} ]}>
      <FlatList
        data={actionSheetListData}
        showsVerticalScrollIndicator={false}
        keyExtractor={ item=>item.id.toString() }
        renderItem={(el)=>{
          return(
            <ActionSheetItem
              icecreamId    ={el.item.id}
              icecreamName  ={el.item.icecream_name}
              perPiecePrice ={el.item.per_piece_price}
              callBack      ={ (id:number,name:string)=>callBack(id,name) }
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


