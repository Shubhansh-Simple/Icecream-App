import React, { useState,useEffect } from 'react';

import { View, 
         Text,
         Modal,
         TextInput,
         TouchableWithoutFeedback,
         StyleSheet } from 'react-native';

// MODAL
import {BlackBackground}  from '../BlackBackground';

// LOCAL
import commonStyle        from '../../Styles/commonStyle';
import CancelSubmitButton from '../Buttons/CancelSubmitButton';
import WidgetHeader       from '../WidgetHeader';

export default function IosInput({ title,
                                   description,
                                   placeholder,
                                   defaultText,
                                   visible,
                                   setVisible,
                                   submitData
                                }){

  const [ icecreamInput, setIcecreamInput  ]       = useState('')
  const [ perPiecePrice, setPerPiecePrice ]        = useState('')
  const [ perBoxPieces, setPerBoxPieces ]          = useState('')
  const [ supplierCommision, setSupplierCommision] = useState('')

  useEffect( () => {
    /*
     * FIRST THING HAPPEN
     * AFTER LOADING
     * THIS SCREEN
     */
    setIcecreamInput(defaultText)
  },[ defaultText ])


  return (
    <View>

      {/* BACKGROUND MODAL */}
      <BlackBackground
        visible={visible}
        setVisible={ (bool:boolean)=>setVisible(bool) }
      />

      <Modal
        visible       ={visible}
        animationType ='slide'
        transparent   ={true}
        onRequestClose={ ()=>setVisible(false) }
      >
        <TouchableWithoutFeedback
          onPressOut={ ()=>setVisible(false) }
        >
          <View style={ commonStyle.modalInputContainer }>

            <View style={ commonStyle.modalInputBackground }>

              <WidgetHeader
                title      ={title}
                description={description}
              />

              {/* SOURCE NAME INPUT */}
              <TextInput
                placeholder = { placeholder}
                placeholderTextColor='#505752'
                onChangeText={ inputValue=>setIcecreamInput(inputValue) }
                value={ icecreamInput }
                style={ styles.modalIcecreamInput } 
              />
  
              {/* HORIZONTAL LINE CONTAINER */}
              <View style={ commonStyle.lineContainer }>
                <TextInput
                  placeholder = 'Per Piece Price '
                  placeholderTextColor='#505752'
                  keyboardType='numeric'
                  onChangeText={ inputValue=>setPerPiecePrice(inputValue) }
                  value={ perPiecePrice }
                  style={ styles.modalIcecreamInput } 
                />
                <Text style={ styles.unitTag }>
                  Rs
                </Text>

                <TextInput
                  placeholder = 'Total Pieces'
                  placeholderTextColor='#505752'
                  keyboardType='numeric'
                  onChangeText={ inputValue=>setPerBoxPieces(inputValue) }
                  value={ perBoxPieces }
                  style={ styles.modalIcecreamInput } 
                />
                <Text style={ styles.unitTag }>
                  Piece
                </Text>

              </View>

              <View style={{ flexDirection : 'row' }}>

                <TextInput
                  placeholder = 'Supplier Commission'
                  placeholderTextColor='#505752'
                  keyboardType='numeric'
                  onChangeText={
                          inputValue=>setSupplierCommision(inputValue) 
                  }
                  value={ supplierCommision }
                  style={ styles.modalIcecreamInput } 
                />
                <Text style={ styles.unitTag }>
                  Pay To Supplier
                </Text>
              </View>
              
              {/*CONDITIONAL CODE*/} 
              { icecreamInput.length > 20
                  &&
                <Text style={ commonStyle.errorText }>
                  (Not more than 20 characters)
                </Text>
              }

              {/* COMPONENT */}
              <CancelSubmitButton
                submitCallBack={ ()=>{ setVisible(false) 
                                       submitData( icecreamInput,
                                                   perPiecePrice,
                                                   perBoxPieces,
                                                   supplierCommision ) 
                               }}
                cancelCallBack={ ()=>setVisible(false) }
              />

            </View>
          </View>
  
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({

  unitTag : {
    fontSize : 15,
    fontWeight : 'bold',
    color : '#505752',
    textAlignVertical : 'center',
    right : 5,
    top : 5,
  },

  modalIcecreamInput : {
    fontSize : 18,
    borderWidth : 2,
    marginHorizontal : 5,
    borderRadius : 7,
    backgroundColor : 'white',
    borderColor : '#CACACA',
    paddingHorizontal : 8,
    paddingVertical : 5,
    marginVertical : 5,
    color : 'black',
  },

});



