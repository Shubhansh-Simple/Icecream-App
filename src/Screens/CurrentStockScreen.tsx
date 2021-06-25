import React,{ useState, useEffect }  from 'react';

import { View } from 'react-native';

//MODAL
import IcecreamInput from '../Components/CurrentStock/IcecreamInput';

import NoDataFound   from '../Components/NoDataFound';
import commonStyle   from '../Styles/commonStyle';
import Icon          from '../Components/Buttons/Icon';

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
                   databaseData=>setCurrentStockList(databaseData.rows._array)
                 )
  }

  function insertStock( stock_id      :number, 
                        per_box_piece :number,
                        quantity      :number, 
                        isPiece       :boolean 
                      ){
  /*
   *INSERT STOCK
   */
    let new_quantity = ( !isPiece ?  quantity*per_box_piece : quantity )

    queryExecutor( stock.updateStockQuery,
                   [new_quantity,stock_id],
                   'Stock-U',
                   databaseData=>readStock()
                 )
  }
  
  function deleteStock( id:number ){
  /*
   *DELETE STOCK, set total_piece=0
   */
    queryExecutor( stock.deleteStockQuery,
                   [id],
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

      {/* ICECREAM INPUT MODAL */}
      <IcecreamInput
        title         ='Add Icecream To Stock'
        description   ='Choose icecreams & their quantities'
        visible       ={ icecreamInput }
        setVisible    ={ (bool:boolean)=>setIcecreamInput(bool) }
        submitBtnTitle='  Add  '
        query         ={ stock.readStockQuery } 
        submitData    ={ ( selectedIcecream,  
                           icecreamQuantity, 
                           isPiece 
                         )=>insertStock( selectedIcecream.stock_id,
                                          selectedIcecream.per_box_piece,
                                          icecreamQuantity,
                                          isPiece 
                                        )
        }
      />

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
      
      {/* ICECREAM INPUT MODAL CALLER */}
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

