import React, { useState,useEffect } from 'react';

import { View, 
         Text,
         Modal,
         TextInput,
         TouchableOpacity,
         TouchableWithoutFeedback,
         StyleSheet } from 'react-native';

// LOCAL
import {BlackBackground} from '../BlackBackground';
import commonStyle       from '../../Styles/commonStyle';

import IosInputButton from '../Icecream/IosInputButton';

export default function IosInput({ title,
                                   description,
                                   placeholder,
                                   defaultText,
                                   visible,
                                   setVisible,
                                   submitData
                                }){

  const [ icecreamInput, setIcecreamInput  ]       = useState('')
  const [ perPiecePrice, setPerPiecePrice ]        = useState()
  const [ perBoxPieces, setPerBoxPieces ]          = useState()
  const [ supplierCommision, setSupplierCommision] = useState()

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
        onRequestClose={ ()=>{ setVisible(false) } }
      >
        <TouchableWithoutFeedback
          onPressOut={ ()=>setVisible(false) }
        >
          <View style={ styles.modalContainer }>

            <View style={ styles.modalBackground }>

              <Text style={ styles.modalTitle} >
                {title}
              </Text>

              <Text style={ styles.modalDescription} >
                ({description})
              </Text>

              {/* SOURCE NAME INPUT */}
              <TextInput
                placeholder = { placeholder}
                placeholderTextColor='#505752'
                onChangeText={ inputValue=>setIcecreamInput(inputValue) }
                value={ icecreamInput }
                style={ styles.modalIcecreamInput } 
              />
  
              {/* LINE CONTAINER */}
              <View style={ commonStyle.lineContainer }>
                <TextInput
                  placeholder = 'Per Piece Price '
                  placeholderTextColor='#505752'
                  keyboardType='numeric'
                  onChangeText={ inputValue=>setPerPiecePrice(inputValue) }
                  value={ perPiecePrice }
                  style={ styles.modalIcecreamInput } 
                />
                <TextInput
                  placeholder = 'Per Box Piece'
                  placeholderTextColor='#505752'
                  keyboardType='numeric'
                  onChangeText={ inputValue=>setPerBoxPieces(inputValue) }
                  value={ perBoxPieces }
                  style={ styles.modalIcecreamInput } 
                />
              </View>
              <TextInput
                placeholder = 'Supplier Commission'
                placeholderTextColor='#505752'
                keyboardType='numeric'
                onChangeText={ inputValue=>setSupplierCommision(inputValue) }
                value={ supplierCommision }
                style={ styles.modalIcecreamInput } 
              />
              
              {/*CONDITIONAL CODE*/} 
              { icecreamInput.length > 20
                  &&
                <Text style={ commonStyle.errorText }>
                  (Not more than 20 characters)
                </Text>
              }

              <View style={{ 
                flexDirection : 'row', 
                justifyContent : 'space-around' 
              }}>
    
                <TouchableOpacity
                  onPress={ ()=>{ setVisible(false) 
                                  submitData( icecreamInput,
                                              perPiecePrice,
                                              perBoxPieces,
                                              supplierCommision ) 
                                }
                  }
                >
                  <IosInputButton 
                    btnText='Submit' 
                    btnColor='#2699ff'
                  />
                  
                </TouchableOpacity>

                {/* STRAIGHT LINE */}
                <View style={{ 
                  borderRightColor :'#CACACA',
                  borderRightWidth :  2,
                  backgroundColor  : 'black',
                  justifyContent   : 'space-around',
                  }}>
                </View>

                {/* SUBMIT BUTTON */}
                <TouchableOpacity
                  onPress={ ()=>setVisible(false)}
                >
                  <IosInputButton
                    btnText='Cancel' 
                    btnColor='red'
                  />
                </TouchableOpacity>

              </View>

            </View>

          </View>
  
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({

  modalContainer : {
    flex : 1,
    justifyContent : 'center',
    paddingHorizontal : 10,
  },

  modalBackground : {
    backgroundColor : '#E0E0E0',
    borderRadius : 10,
  },

  modalTitle : {
    fontSize   : 20, 
    fontWeight : 'bold',
    textAlign : 'center',
    paddingTop : 25,
    paddingBottom : 2,
  },

  modalDescription : {
    fontSize : 15, 
    textAlign : 'center',
    fontStyle : 'italic',
    color:'#4e544d', 
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



