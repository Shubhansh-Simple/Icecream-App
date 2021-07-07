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

// CUSTOM FUNCTION
import { todayDate,  
         getDates,
         dataTypeConvertor,
         icecreamAlreadyExist } from '../CleanCode/CleanFunction';
import quantityConverter        from '../CleanCode/Sale/HelperFunction';

export default function SaleScreen() {

  const [ saleList,    setSaleList]                 = useState([])
  const [ icecreamInput, setIcecreamInput ]         = useState(false)
  const [ saleDateContainer,setSaleDateContainer ] = useState('')

  /*
   * Check if icecream 
   * already exist in 
   * today's date
   */
  function callIcecreamAlreadyExist( selectedIcecream, 
                                     icecreamQuantity, 
                                     isPiece 
                                   ){

    let saleId = icecreamAlreadyExist( saleList[0].icecreamList,
                                       selectedIcecream.icecream.icecream_id )

    let new_quantity = quantityConverter( selectedIcecream.icecream.per_box_piece,
                                          icecreamQuantity,
                                          isPiece )
    { saleId > 0 
       ?
      updateSale( selectedIcecream, new_quantity, saleId )      
        :
      insertSale( selectedIcecream, new_quantity )
    }

  }


  /*
   * READ ONLY NON-REPEATED 
   * DATES FROM SALE
   */
  function readSalesDates(){

    queryExecutor( sale.readSaleDatesQuery,
                   null,
                   'SaleDate-R',
                   databaseData=>{setSaleDateContainer( 
                        getDates(databaseData.rows._array) 
                      )
                   }
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
      queryExecutor( sale.readSaleQuery+datesList,
                     null,
                     'Sale-R',
                     databaseData=>{
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
                   databaseData=>{false}
                 )
  }


  /*
   *INSERT SALE
   */
  function insertSale( selectedIcecream, 
                       quantity : number ){

    let date          = todayDate()

    queryExecutor( sale.insertSaleQuery,
                   [ quantity, 
                     date, 
                     selectedIcecream.icecream.icecream_id ], 
                   'Sale-I',
                   databaseData=>{ insertStock( selectedIcecream.stock_id,
                                                -quantity,
                                              )
                                   readSale(saleDateContainer)
                                 }
                 )
  }

  /*
   *INCREMENT SALE
   */
  function updateSale( selectedIcecream, 
                       quantity : number,
                       saleId : number ){



    queryExecutor( sale.updateSaleQuery,
                   [ quantity, saleId ], 
                   'Sale-U',
                   databaseData=>{ insertStock( selectedIcecream.stock_id,
                                                -quantity
                                              )
                                   readSale(saleDateContainer)
                                 }
                 )
  }


  /*
   * FIRST TIME
   * APP OPENS
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
    { saleDateContainer && 
      readSale(saleDateContainer)
    }
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
                         )=>callIcecreamAlreadyExist( selectedIcecream,
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


