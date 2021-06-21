import React, { useState,useEffect }  from 'react';
import { createIcecream, 
         createStock } from '../Database/StarterFunction';

import { View, 
         Text,
         StyleSheet } from 'react-native';

import IcecreamInput from '../Components/CurrentStock/IcecreamInput';

// DATABASE
import queryExecutor    from '../Database/StarterFunction';
import {stock}          from '../Database/Queries';

// LOCAL
import commonStyle from '../Styles/commonStyle';
import Icon        from '../Components/Buttons/Icon';
import {extractId}      from '../CleanCode/CleanFunction';

export default function HomeScreen() {

  const [ currentStockList,    setCurrentStockList] = useState([])
  const [ icecreamInput, setIcecreamInput ]         = useState(false)

  function readStock(){
    /*
     *READ STOCK
     */
    queryExecutor( stock.readStockQuery,
                   null,
                   'Stock-R',
                   databaseData=>setCurrentStockList(databaseData)
                 )
  }

  function insertSale(){

  }



  useEffect( ()=>{
    createIcecream()
    createStock()
  },[])

  return(
    <View style={styles.container}>

      {/* ICECREAM INPUT MODAL */}
      <IcecreamInput
        title            ='Starts Solding Icecream'
        description      ='Choose icecream & quantities to sold'
        visible          ={icecreamInput}
        setVisible       ={ (bool:boolean)=>setIcecreamInput(bool) }
        currentIcecreamId={ extractId(currentStockList) }          //calling func.

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


