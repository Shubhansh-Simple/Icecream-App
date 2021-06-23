import React, { useState,useEffect }  from 'react';

import { createIcecream, 
         createStock } from '../Database/StarterFunction';

import { View, 
         StyleSheet } from 'react-native';

import IcecreamInput from '../Components/CurrentStock/IcecreamInput';

// DATABASE
import queryExecutor    from '../Database/StarterFunction';
import {stock}          from '../Database/Queries';

// LOCAL
import commonStyle from '../Styles/commonStyle';
import Icon        from '../Components/Buttons/Icon';

export default function HomeScreen() {

  const [ saleList,    setSaleList]         = useState([])
  const [ icecreamInput, setIcecreamInput ] = useState(false)

  /*
   *READ STOCK
   */
  function readSale(){

    queryExecutor( stock.readSaleQuery,
                   null,
                   'Sale-R',
                   databaseData=>setSaleList(databaseData)
                 )
  }

  /*
   * On Selling Icecream, 
   * CurrentStock Decrease
   */
  function decrementStock( quantity:number, 
                           per_box_piece : number,
                           id:number, 
                           isPiece:boolean,
                         ){

    let new_quantiy = ( !isPiece ?  quantity*per_box_piece : quantity )

    queryExecutor( stock.decrementStockQuery,
                   [ new_quantiy,id ],
                   'Stock-Down',
                   databaseData=>console.log('Do nothing here - ',databaseData)
                 )
  }

  function insertSale(){

  }


  useEffect( ()=>{
    createIcecream()
    createStock()
  //createSale()
  },[])

  useEffect( ()=>{
    //readStock()  
  },[icecreamInput])

  return(
    <View style={styles.container}>

      {/* ICECREAM INPUT MODAL */}
      <IcecreamInput
        title            ='Sold Icecream'
        description      ='Choose icecream & quantities to sold'
        visible          ={icecreamInput}
        setVisible       ={ (bool:boolean)=>setIcecreamInput(bool) }
        filterQuery      ={stock.readStockIcecreamQuery }
        currentIcecreamId={0}          //calling func.

        submitData ={ (item,quantity,bool)=>insertSale()}
      />

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


