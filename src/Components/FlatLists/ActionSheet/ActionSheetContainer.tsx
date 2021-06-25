import React  from 'react';

import { View, 
         FlatList,
         StyleSheet } from 'react-native';

import ActionSheetItem     from './ActionSheetItem';
import NoDataFound         from '../../NoDataFound';

import {window}    from '../../../CleanCode/CleanVaraible';

export default function ActionSheetContainer({ actionSheetListData, 
                                               noDataFound,
                                               noDataTip,
                                               callBack }){

  return(
    <View style={[styles.modalBody, {'height' : window.screenHeight/3.2} ]}>

      { actionSheetListData.length===0 
          ?
        <NoDataFound 
          title={noDataFound}
          description={noDataTip}
          emojiName='emoji-sad'
          emojiSize={100}
          callBack={false}
        />
          :
        <FlatList
          data={actionSheetListData}
          showsVerticalScrollIndicator={false}
          keyExtractor={ item=>item.id.toString() }
          renderItem={(el)=>{
            return(
              <ActionSheetItem
                stockId         ={el.item.id}
                icecreamId      ={el.item.icecream_id}
                icecreamName    ={el.item.icecream_name}
                perPiecePrice   ={el.item.per_piece_price}
                perBoxPiece     ={el.item.per_box_piece}
                totalPiece      ={el.item.total_piece }
                callBack        ={(selectedIcecream)=>callBack(selectedIcecream)}
              />
            )
          }}
        />
      }
    </View>
  )
};

const styles=StyleSheet.create({
  modalBody:{
    alignItems : 'stretch',
    padding    : 4,
  },
  errorStyle : {
    fontSize : 40,
    textAlign : 'center',
    color : 'red',
  }

})


