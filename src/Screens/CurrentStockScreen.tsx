import React,{useState,useEffect}  from 'react';
import { View, 
         Text,
         StyleSheet } from 'react-native';

import NoDataFound   from '../Components/NoDataFound';
import commonStyle   from '../Styles/commonStyle';
import ActionSheet   from '../Components/ActionSheet';
import Icon          from '../Components/Buttons/Icon';
//import useIcecreamList   from '../Hooks/Icecream/useIcecreamList';

// DATABASE
import queryExecutor       from '../Database/StarterFunction';
import {icecream,stock}          from '../Database/Queries';


export default function CurrentStockScreen({navigation}) {

  const [ icecreamList, setIcecreamList ]  = useState([])
  const [ stockList,    setStockList]      = useState([])
  const [ actionPopup, setActionPopup   ]  = useState(false)

  function readIcecream(){
    queryExecutor( icecream.readIcecreamQuery,
                   null,
                   'Icecream-R',
                   databaseData=>setIcecreamList(databaseData)
                 )
  }

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

  useEffect( ()=>{
    { actionPopup 
        && 
      readIcecream()
    }
  },[ actionPopup ])

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
          callBack={ ()=>console.log('We need to do something') }
        />
          :
        <Text>{stockList}</Text> 
      }

      {/* ACTIONSHEET WIDGET */}
      <ActionSheet
        title       ='Icecream List'
        description ='Choose a icecream from following'
        data        ={icecreamList}
        visible     ={actionPopup}
        setVisible  ={ (bool:boolean)=>setActionPopup(bool) }
        selectedItem={ itemId=>console.log('The id is here - ',id) }
      />
      

      {/*INPUT WIDGET CALLER*/}
      <View style={ commonStyle.positionBtnContainer}>
        <Icon 
          iconName ='icecream'
          iconSize ={50}
          color    ='white'
          bgCircleColor='#fc035e'
          callBack ={ ()=>setActionPopup(true) }
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


