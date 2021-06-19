import React,{useState,useEffect}  from 'react';

import { View, Text } from 'react-native';

import NoDataFound   from '../Components/NoDataFound';
import commonStyle   from '../Styles/commonStyle';
import Icon          from '../Components/Buttons/Icon';
//import useIcecreamList   from '../Hooks/Icecream/useIcecreamList';
import IcecreamInput from '../Components/CurrentStock/IcecreamInput';

// DATABASE
import queryExecutor       from '../Database/StarterFunction';
import {stock}          from '../Database/Queries';


export default function CurrentStockScreen({navigation}) {

  const [ stockList,    setStockList]      = useState([])

  const [ icecreamInput, setIcecreamInput ] = useState(false)


  function readStock(){
    queryExecutor( stock.readStockQuery,
                   null,
                   'Stock-R',
                   databaseData=>setStockList(databaseData)
                 )
  }

  function insertStock( icecream_id:number,
                        total_piece:number,){

    queryExecutor( stock.insertStockQuery,
                   [ icecream_id,
                     total_piece ],
                   'Stock-I',
                   databaseData=>readStock()
                 )
  }


  /* 
   * READ EVERY TIME ON 
   * CHANGE NAVIGATION 
   */
  useEffect( ()=>{
    const unsubscribe = navigation.addListener(
                          'focus', 
                          ()=>readStock() 
                        )
    return unsubscribe;
  },[navigation])


  return(
    <View style={{ 'flex' : 1 }}>

      {/* CONDITIONAL CODE */}
      { stockList.length === 0 
          ?
        <NoDataFound 
          title='No Stock Found'
          description='Kindly add stock first'
          emojiName='emoji-neutral'
          emojiSize={90}
          callBack={ ()=>readStock() }
        />
          :
        <Text>{stockList}</Text> 
      }

      <IcecreamInput
        title       ='Add Stock'
        description ='Choose icecream & quantities'
        visible     ={icecreamInput}
        setVisible  ={ (bool:boolean)=>setIcecreamInput(bool) }
        submitData  ={ data=>console.log('The data is ',data)}
      />

      {/*INPUT WIDGET CALLER BUTTON*/}
      <View style={ commonStyle.positionBtnContainer}>
        <Icon 
          iconName ='shopping-cart'
          iconSize ={50}
          color    ='white'
          bgCircleColor='#fc035e'
          callBack ={ ()=>setIcecreamInput(true) }
        />
      </View>
    </View>
  )
}

