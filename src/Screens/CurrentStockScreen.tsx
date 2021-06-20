import React,{useState,useEffect}  from 'react';

import { View } from 'react-native';

import NoDataFound   from '../Components/NoDataFound';
import commonStyle   from '../Styles/commonStyle';
import Icon          from '../Components/Buttons/Icon';
import IcecreamInput from '../Components/CurrentStock/IcecreamInput';

import CurrentStockContainer 
               from '../Components/FlatLists/CurrentStock/CurrentStockContainer';

// DATABASE
import queryExecutor    from '../Database/StarterFunction';
import {stock}          from '../Database/Queries';


export default function CurrentStockScreen({navigation}) {

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

  function insertStock( icecreamId   :number, 
                        per_box_piece:number,
                        quantity     :number, 
                        isPiece      :boolean 
                      ){
  /*
   *INSERT STOCK
   */

    let new_quantiy = ( !isPiece ?  quantity*per_box_piece : quantity )

    queryExecutor( stock.insertStockQuery,
                   [ icecreamId, new_quantiy ],
                   'Stock-I',
                   databaseData=>readStock()
                 )
  }
  
  function deleteStock( id:number ){
  /*
   *DELETE STOCK
   */
    queryExecutor( stock.deleteStockQuery,
                   [ id ],
                   'Stock-D',
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
      { currentStockList.length === 0 
          ?
        <NoDataFound 
          title='No Stock Found'
          description='Kindly add stock first'
          emojiName='emoji-neutral'
          emojiSize={90}
          callBack={ ()=>readStock() }
        />
          :
        <CurrentStockContainer
          currentStockList={currentStockList}
          deleteCallBack={(id:number)=>deleteStock(id)}
        />
      }

      <IcecreamInput
        title       ='Add Stock'
        description ='Choose icecream & quantities'
        visible     ={icecreamInput}
        setVisible  ={ (bool:boolean)=>setIcecreamInput(bool) }

        submitData ={ (item,quantity,bool)=>insertStock( +item.icecreamId,
                                                         +item.per_box_piece,
                                                         +quantity,
                                                         bool )
        }
      />

      {/*INPUT WIDGET CALLER BUTTON*/}
      <View style={ commonStyle.positionBtnContainer}>
        <Icon 
          iconName ='shopping-bag'
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

