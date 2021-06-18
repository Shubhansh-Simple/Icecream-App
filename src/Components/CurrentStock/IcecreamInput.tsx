/*
 * Popup Ios Input like widgets
 * take Icecream Quantity & Name
 * as input
 */
import React, { useState, useEffect} from 'react';

import { View,
         Text,
         Modal,
         TextInput,
         TouchableWithoutFeedback,
         StyleSheet } from 'react-native';

// LOCAL
import { BlackBackground } from '../BlackBackground';
import commonStyle         from '../../Styles/commonStyle';
import CancelSubmitButton  from '../Buttons/CancelSubmitButton';
import DropDown            from '../DropDown';

export default function IcecreamInput({ title,
                                        description,
                                        visible,
                                        setVisible,
                                        dropDownCallBack,
                                        submitData
}){
  const [ icecreamName,setIcecreamName ] = useState('Select Icecream')
  const [ icecreamQuantity,setIcecreamQuantity ] = useState('')

  return(
    <View>
      {/* BACKGROUND MODAL*/}
      <BlackBackground
        visible={visible}
        setVisible={ (bool:boolean)=>setVisible(bool) }
      />

      <Modal
        visible    ={visible}
        animationType='slide'
        transparent={true}
        onRequestClose={ ()=>setVisible(false) }
      >
        <TouchableWithoutFeedback
          onPressOut={ ()=>setVisible(false) }
        >
          <View style={ commonStyle.modalInputContainer} >
            <View style={ commonStyle.modalInputBackground }>

              <Text style={ commonStyle.modalInputTitle }>
                {title}
              </Text>

              <Text style={ commonStyle.modalInputDescription }>
                ({description})
              </Text>

              <DropDown 
                title        ={icecreamName}
                iconName     ='arrow-drop-down'
                iconSize     ={24}
                iconColor    ='white'
                bgCircleColor='black'
                callBack     ={dropDownCallBack}
              />

              {/* HORIZONTAL LINE CONTAINER */}
              <View style={ commonStyle.lineContainer }>
                <TextInput
                  placeholder = 'Quantity'
                  placeholderTextColor='#323834'
                  keyboardType='numeric'
                  onChangeText={ inputValue=>setIcecreamQuantity(inputValue) }
                  value={ icecreamQuantity }
                  style={[ commonStyle.modalIcecreamInput,
                           {'fontWeight':'bold'} 
                        ]}
                />
              </View>


              {/* COMPONENT */}
              <CancelSubmitButton
                submitCallBack={ ()=>console.log('Submit button') }
                cancelCallBack={ ()=>setVisible(false) }
              />

            </View>
          </View>


        
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
})


