import React, { useState,useEffect } from 'react';

import { View, 
         StyleSheet } from 'react-native';

// LOCAL
//import useIcecreamList   from '../Hooks/Icecream/useIcecreamList';
import NoDataFound       from '../Components/NoDataFound';
import Icon              from '../Components/Buttons/Icon';
import IosInput          from '../Components/Icecream/IosInput';
import IcecreamContainer from '../Components/FlatLists/Icecream/IcecreamContainer';
import commonStyle       from '../Styles/commonStyle';

// DATABASE
import queryExecutor       from '../Database/StarterFunction';
import {icecream}          from '../Database/Queries';

export default function IcecreamScreen() {


  const [ icecreamList, setIcecreamList ]              = useState([])
  const [ iosInputVisible, setIosInputVisible ]        = useState(false)
  const [ iosInputDefaulText, setIosInputDefaultText ] = useState('')


  function readIcecream(){

    queryExecutor( icecream.readIcecreamQuery,
                   null,
                   'Icecream-R',
                   databaseData=>setIcecreamList(databaseData)
                 )
  }

  function insertIcecream( icecream_name:string,
                           per_piece_price:number,
                           per_box_piece:number,
                           supplier_commission:number ){

    queryExecutor( icecream.insertIcecreamQuery,
                   [ icecream_name,
                     per_piece_price,
                     per_box_piece,
                     supplier_commission ],
                   'Icecream-I',
                   databaseData=>readIcecream()
                 )
  }

  useEffect( ()=>{
    readIcecream() 
  },[])

  return(
    <View style={{ 'flex' : 1 }}>

      {/* CONDITIONAL CODE */}
      { icecreamList.length === 0 
          ?
        <NoDataFound 
          title='No Icecream Found'
          description='Kindly add the icecream first'
          emojiName='emoji-sad'
          emojiSize={84}
          callBack={ ()=>readIcecream() }
        />
          :
        <IcecreamContainer
          icecreamListData={icecreamList}
        />
      }

      {/*INPUT WIDGET*/}
      <IosInput
        title          ='Adding Icecream'
        description    ='Tip - Add flavour name Cup/Cone Type'
        placeholder    ='Type icecream name here...'
        defaultText    ={iosInputDefaulText}
        visible        ={iosInputVisible}
        setVisible     ={ (bool:boolean)=>{setIosInputVisible(bool)} }
        submitData     ={ (data1,data2,data3,data4)=>insertIcecream( data1,
                                                                     +data2,
                                                                     +data3,
                                                                     +data4 )
                        }
      />

      {/*INPUT WIDGET CALLER BUTTON*/}
      <View style={ commonStyle.positionBtnContainer}>
        <Icon 
          iconName ='icecream'
          iconSize ={50}
          color    ='white'
          bgCircleColor='#fc035e'
          callBack ={ ()=>setIosInputVisible(true) }
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


