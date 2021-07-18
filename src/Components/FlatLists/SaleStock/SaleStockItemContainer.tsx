/*
 * Sale Stock ListView
 * Container
 */

import React,{useState} from 'react';

import { View,
         Text,
         StyleSheet,
         FlatList } from 'react-native';

import SaleStockItem from './SaleStockItem';
import commonStyle   from '../../../Styles/commonStyle';
import StraightLine  from '../../StraightLine';
import {dateFormat}  from '../../../CleanCode/CleanFunction';

export default function SaleStockItemContainer({ entry_date, 
                                                 dateIcecreamList
                                              }){

  const [ totalSoldPrice, setTotalSoldPrice ] = useState(0)
  const [ totalSoldPiece, setTotalSoldPiece ] = useState(0)
  const [ totalSoldBox,   setTotalSoldBox ] = useState(0)

  /*
   * TOTALLING OF SOLD PIECES
   */
  function incrementPieceState(data:number){
    setTotalSoldPiece( totalSoldPiece=>totalSoldPiece+data )
  }

  /*
   * TOTALLING OF SOLD BOX
   */

  function incrementBoxState(data:number){
    setTotalSoldBox( totalSoldBox=>totalSoldBox+data )
  }

  /*
   * TOTALLING OF SOLD PIECE'S PRICE 
   */
  function incrementPriceState(data:number){
    setTotalSoldPrice( totalSoldPrice=>totalSoldPrice+data )
  }

  return(
    <View style={[styles.saleScreenContainer, commonStyle.shadow ]}>
      <Text style={styles.salesDateStyle}>
        { dateFormat(entry_date) }
      </Text>

      <View style={ styles.billOutfitStyle }>
        <View style={{ flex : 5, alignItems : 'flex-start' }}>
          <Text style={styles.billHeadingStyle}>
            Icecreams
          </Text>
        </View>


        <View style={{ flex : 2 }}>
          <Text style={styles.billHeadingStyle}>
            Quantity
          </Text>
        </View>

        <View style={{ flex : 2 , alignItems : 'flex-end'}}>
          <Text style={styles.billHeadingStyle}>
            Total
          </Text>
        </View>
      </View>

      <View style={ styles.billStartStyle }>

        {/* ICECREAM LISTING PER DATE */}
        <FlatList
          data         ={dateIcecreamList}
          keyExtractor ={ item=>item.id.toString() }
          showsVerticalScrollIndicator={false}
          renderItem   ={ (el)=>{
            return(
              <View>
                <SaleStockItem
                  sale_id        ={el.item.id}
                  icecream_name  ={el.item.icecream_name}
                  per_box_piece  ={el.item.per_box_piece}
                  per_piece_price={el.item.per_piece_price}
                  sold_piece     ={el.item.sold_piece}
                  is_active      ={el.item.is_active}
                  totallingPiece ={ (totalPiece:number)=>incrementPieceState(
                                                              totalPiece
                                                         )}
                  totallingPrice ={ (totalPrice:number)=>incrementPriceState(
                                                              totalPrice
                                                         )}
                  totallingBox ={ (totalBox:number)=>incrementBoxState(
                                                              totalBox
                                                         )}
                />
                <StraightLine width={1} color='#CACACA' />

              </View>

            )}
          }
        />

        <View style={[ styles.billOutfitStyle, 
                      {backgroundColor : '#393b39'} ]}>
        
          <View style={{ flex : 5 , alignItems : 'flex-start'}}>
            <Text style={ styles.totalStyle } >Total</Text>
          </View>

          <View style={{ flex : 3 }}>
            <Text style={ styles.totalStyle }>
              {totalSoldBox} Box {totalSoldPiece} Piece
            </Text>
          </View>

          <View style={{ flex : 2 , alignItems : 'flex-end'}}>
            <Text style={ styles.totalStyle } >{totalSoldPrice} Rs</Text>
          </View>
        </View>

      </View>
    </View>
  )
};
const styles = StyleSheet.create({

  saleScreenContainer : {
    marginVertical : 10,
    backgroundColor: 'white',
    borderWidth : 1,
    borderColor : '#CACACA',
  },

  billOutfitStyle : { 
    flexDirection  : 'row',  
    justifyContent : 'space-between',
    paddingVertical: 5, 
    paddingHorizontal : 15,
  },

  salesDateStyle : {
    fontSize : 25,
    textAlign : 'center',
    color : '#393b39',
  },

  billHeadingStyle : {
    fontSize : 14,
    fontStyle : 'italic',
  },

  billStartStyle : {
    paddingVertical : 9,
  },

  totalStyle : {
    fontStyle : 'italic',
    color : 'white',
  },
  
})


