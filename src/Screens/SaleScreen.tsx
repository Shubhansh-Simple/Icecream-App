import React, { useState,useEffect }  from 'react';

import { createIcecream, 
         createStock,
         createSale } from '../Database/StarterFunction';

import { View, 
         StyleSheet } from 'react-native';

import IcecreamInput from '../Components/CurrentStock/IcecreamInput';

// DATABASE
import queryExecutor    from '../Database/StarterFunction';
import {stock,sale}          from '../Database/Queries';

// LOCAL
import commonStyle from '../Styles/commonStyle';
import Icon        from '../Components/Buttons/Icon';
import NoDataFound from '../Components/NoDataFound';
import {todayDate} from '../CleanCode/CleanFunction';

export default function SaleScreen() {

  const [ saleList,    setSaleList]         = useState([])
  const [ icecreamInput, setIcecreamInput ] = useState(false)

  /*
   *READ SALE
   */
  function readSale(){

    queryExecutor( sale.readSaleQuery,
                   null,
                   'Sale-R',
                   databaseData=>{
                     console.log('Sale table - ',databaseData.rows._array)
                     setSaleList(databaseData.rows._array)
                   }
                 )
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
                   databaseData=>readSale()
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
                   [ new_quantity, date, selectedIcecream.stock_id ], 
                   'Sale-I',
                   databaseData=>insertStock( selectedIcecream.stock_id,
                                              -new_quantity,
                                            )
                 )

  }

  useEffect( ()=>{
    createIcecream()
    createStock()
    createSale()
  },[])

  useEffect( ()=>{
    readSale()  
  },[])

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
        submitData    ={( selectedIcecream,  
                          icecreamQuantity, 
                          isPiece 
                        )=>{
                          insertSale(selectedIcecream,icecreamQuantity,isPiece)
        }
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
          callBack   ={ ()=>readSale() }
        />
          :
          null
        //<SaleContainer
        //  currentStockList={currentStockList}
        //  deleteCallBack={(id:number)=>deleteStock(id)}
        ///>
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


