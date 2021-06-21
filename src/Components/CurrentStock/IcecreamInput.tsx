/*
 * Popup Ios Input like widgets
 * take Icecream Quantity & Name
 * as input
 */
import React, { useState, useEffect} from 'react';

import { View,
         Modal,
         TextInput,
         TouchableWithoutFeedback } from 'react-native';

// LOCAL MODAL
import { BlackBackground } from '../BlackBackground';
import ActionSheet         from '../ActionSheet';

// LOCAL COMPONENT
import CancelSubmitButton  from '../Buttons/CancelSubmitButton';
import DropDown            from '../DropDown';
import Icon                from '../Buttons/Icon';
import WidgetHeader        from '../WidgetHeader';
import commonStyle         from '../../Styles/commonStyle';

// CLEAN CODE 
import { iconReturn }                   from '../../CleanCode/CleanFunction';
import { icecreamDefault, iconDefault } from '../../CleanCode/CleanVaraible';

// DATABASE
import queryExecutor from '../../Database/StarterFunction';
import {icecream}    from '../../Database/Queries';


export default function IcecreamInput({ title,
                                        description,
                                        visible,
                                        setVisible,
                                        currentIcecreamId,
                                        submitData
                                     }){

  // ACTION SHEET ICECREAM SELECTOR
  const [ actionPopup, setActionPopup   ]    = useState(false)
  const [ icecreamChoice, setIcecreamChoice] = useState(icecreamDefault)

  const [ isPiece, setIsPiece ] = useState(true)
  const [ icon, setIcon ] = useState(iconDefault)

  const [ icecreamList, setIcecreamList ]        = useState([])
  const [ icecreamQuantity,setIcecreamQuantity ] = useState('')

  function readIcecream( excludedId:Number[] ){

    queryExecutor( icecream.readSelectedIcecreamQuery +  
                   excludedId.toString() + ');',
                   null,
                   'Icecream-R',
                   databaseData=>setIcecreamList(databaseData)
                 )
  }

  /*
   * READ DATA
   * ON ACTION POPUP
   * OPENS
   */
  useEffect( ()=>{
    { actionPopup 
        && 
      readIcecream(currentIcecreamId)
    }
  },[ actionPopup ])

  /*
   * SET ICON
   * ON CLICKING
   */
  useEffect( ()=>{
    { isPiece 
        ? 
      setIcon( iconReturn(isPiece) )
        :
      setIcon( iconReturn(isPiece) )
    }
  },[ isPiece ])

  return(
    <View>

      {/* BACKGROUND MODAL*/}
      <BlackBackground
        visible={visible}
        setVisible={ (bool:boolean)=>setVisible(bool) }
      />

      {/* ACTIONSHEET MODAL */}
      <ActionSheet
        title       ='Icecream List'
        description ='Choose a icecream from following'
        data        ={icecreamList}
        noDataFound ='No New Icecream Found'
        noDataTip   ='(You can update CurrentStock if required)'
        visible     ={actionPopup}
        setVisible  ={ (bool:boolean)=>setActionPopup(bool) }
        selectedItem={ (selectedIcecream)=>{ setIcecreamChoice( 
                                                selectedIcecream
                                             )
                                             setActionPopup(false)
                     }}
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

              <WidgetHeader
                title      ={title}
                description={description}
              />

              <DropDown 
                title        ={icecreamChoice.icecreamName}
                iconName     ='arrow-drop-down'
                iconSize     ={24}
                iconColor    ='white'
                bgCircleColor='black'
                callBack     ={ ()=>setActionPopup(true) }
              />

              {/* HORIZONTAL LINE CONTAINER */}
              {/*
                * Make a component of this section 
                * it's very important.
                */}
              <View style={{ flexDirection : 'row',
                             justifyContent : 'space-evenly' }}>
                <TextInput
                  placeholder         = 'Quantity'
                  placeholderTextColor='#323834'
                  keyboardType        ='numeric'
                  onChangeText = { inputValue=>setIcecreamQuantity(inputValue) }
                  value               ={ icecreamQuantity }
                  style               ={ commonStyle.modalIcecreamInput }
                />

                <View style={{ justifyContent : 'center' }}>
                  <Icon
                    iconName     ={icon.iconName}
                    iconSize     ={25}
                    color        ={icon.color}
                    bgCircleColor='black'
                    bottomTitle  ={icon.bottomTitle}
                    callBack     = { ()=>setIsPiece( ()=>!isPiece ) }
                  />
                </View>
              </View>

              {/* COMPONENT */}
              <CancelSubmitButton
                submitCallBack={ ()=>{
                    submitData( icecreamChoice, icecreamQuantity, isPiece)
                    setVisible(false)
                  }
                }
                cancelCallBack={ ()=>setVisible(false) }
              />

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

