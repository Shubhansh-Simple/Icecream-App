import React, { useState, useEffect }  from 'react';

import { createIcecream, 
         createStock,
         createSale } from '../Database/StarterFunction';

import { View, 
         StyleSheet } from 'react-native';

// MODAL
import IcecreamInput from '../Components/CurrentStock/IcecreamInput';

// DATABASE
import queryExecutor    from '../Database/StarterFunction';
import {stock,sale}          from '../Database/Queries';

// LOCAL
import commonStyle   from '../Styles/commonStyle';
import Icon          from '../Components/Buttons/Icon';
import NoDataFound   from '../Components/NoDataFound';

import SaleStockContainer 
                     from '../Components/FlatLists/SaleStock/SaleStockContainer';

import { todayDate,  
         getDates,
         dataTypeConvertor }  from '../CleanCode/CleanFunction';

export default function SaleScreen() {

  const [ saleList,    setSaleList]                 = useState([])
  const [ icecreamInput, setIcecreamInput ]         = useState(false)
  const [ saleDateContainer,setSaleDateContainer ] = useState('')


  /*
   * READ ONLY NON-REPEATED 
   * DATES FROM SALE
   */
  function readSalesDates(){

    queryExecutor( sale.readSaleDatesQuery,
                   null,
                   'SaleDate-R',
                   databaseData=>setSaleDateContainer( 
                     getDates(databaseData.rows._array) 
                   )
                 )
  }

  /*
   * READ SALE AS PER
   * DATES PASSES
   */
  function readSale(datesList:string){

    //console.log('The value of dataList - ',datesList)
    { datesList 
        &&
      queryExecutor( sale.readSaleQuery + datesList,
                     null,
                     'Sale-R',
                     databaseData=>{
                       //console.log('State- ',databaseData.rows._array)
                       setSaleList( dataTypeConvertor(databaseData.rows._array) )
                     }
                   )
    }
  }
  /*
   * On Selling Icecream, 
   * CurrentStock Decrease
   */
  function insertStock( stock_id      :number, 
                        quantity      :number, 
                      ){
  
    queryExecutor( stock.updateStockQuery,
                   [quantity, stock_id],
                   'Stock-U',
                   databaseData=>readSalesDates()
                 )
  }


  /*
   *INSERT SALE
   */
  function insertSale( selectedIcecream, 
                       quantity : number, 
                       isPiece : boolean ){

    let per_box_piece = selectedIcecream.icecream.per_box_piece
    let date          = todayDate()
    let new_quantity  = ( !isPiece ?  quantity*per_box_piece : quantity )

    queryExecutor( sale.insertSaleQuery,
                   [ new_quantity, 
                     date, 
                     selectedIcecream.icecream.icecream_id ], 
                   'Sale-I',
                   databaseData=>insertStock( selectedIcecream.stock_id,
                                              -new_quantity,
                                            )
                 )
  }

  /*
   * FIRST TIME
   * CODE EXECUTE
   */
  useEffect( ()=>{
    createIcecream()
    createStock()
    createSale()
    readSalesDates()
  },[])


  /*
   * Whenever new dates comes
   * just re-read sale table
   */
  useEffect( ()=>{
    readSale(saleDateContainer)

  },[saleDateContainer])


  return(
    <View style={styles.container}>

      {/* ICECREAM INPUT MODAL */}
      <IcecreamInput
        title         ='Sold Icecream'
        description   ='Choose icecream & quantities to sold'
        visible       ={icecreamInput}
        setVisible    ={ (bool:boolean)=>setIcecreamInput(bool) }
        submitBtnTitle=' Sold '
        query         ={ stock.readConditionStockQuery }
        submitData    ={ ( selectedIcecream,  
                           icecreamQuantity, 
                           isPiece 
                         )=>insertSale( selectedIcecream,
                                        icecreamQuantity, 
                                        isPiece
                                      )
                       }
      />

      {/* CONDITIONAL CODE */}
      { saleList.length === 0 
          ?
        <NoDataFound 
          title      ='No Sale Made'
          description="( It's time to earn some money :} )"
          emojiName  ='thumbs-down'
          emojiSize  ={90}
          callBack   ={ ()=>readSalesDates() }
        />
          :
       <SaleStockContainer
         saleStockList={ saleList }
       />
       //null
      }

      {/* ICECREAM INPUT MODAL CALLER */}
      <View style={ commonStyle.positionBtnContainer}>
        <Icon 
          iconName ='add-shopping-cart'
          iconSize ={50}
          color    ='white'
          bgCircleColor='#fc035e'
          bottomTitle={false}
          callBack ={ ()=>setIcecreamInput(true) }
        />
      </View>
   </View>
  )
}

const styles = StyleSheet.create({
  container : {
    'flex' : 1,
    'justifyContent' : 'center',
    'alignItems' : 'center',
  },
})


