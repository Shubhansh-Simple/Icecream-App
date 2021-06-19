import React from 'react';

import { View, 
         TouchableWithoutFeedback,
         StyleSheet,
         Text,
         Modal } from 'react-native';

import {BlackBackground}    from './BlackBackground';
import ActionSheetContainer from './FlatLists/ActionSheet/ActionSheetContainer';


export default function ActionSheet({ title,
                                      description,
                                      data,
                                      visible,
                                      setVisible,
                                      selectedItem
                                   }){
  return (
    <View>
      {/* BLACK BACKGROUND MODAL */}
      <BlackBackground 
        visible={visible}
        setVisible={ (bool:boolean)=>setVisible(bool) }
      />

      {/* FOREGROUND MODAL */}
      <Modal
        visible       ={visible}
        animationType ='slide'
        transparent   ={true}
        onRequestClose={()=>setVisible(false)}
      >
        <TouchableWithoutFeedback 
          onPressOut={()=>setVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalBackground}>

              {/*HEADER STARTS*/}
              <View style={ styles.modalHeader}>

                <Text style={styles.modalTitle}>
                  {title}
                </Text>

                {/*CONDITIONAL DESCRIPTION CODE*/} 
                { description 
                    && 
                  <Text style={styles.modalDescription}>
                    {description}
                  </Text>
                }
              </View>
              {/*HEADER ENDS*/}

              {/*CONDITIONAL FLATLIST CODE*/} 
              { data 
                  &&
                <ActionSheetContainer
                  actionSheetListData={data}
                  callBack={ (id:number,name:string)=>selectedItem(id,name) }
                />
              }
            </View>

            {/* FOOTER STARTS */}
            <TouchableWithoutFeedback 
              onPress={ ()=>setVisible(false) }>
              <View style={styles.modalCancelButton}>
                <Text style={styles.modalCancelButtonText}>
                  Cancel
                </Text>
              </View>
            </TouchableWithoutFeedback >
            {/* FOOTER ENDS */}

          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* FOREGROUND MODAL ENDS*/}
    </View>
  )
};

const styles = StyleSheet.create({
  modalContainer : {
    flex : 1,
    justifyContent : 'flex-end',
    padding : 15,
  },

  modalBackground : {
    backgroundColor : '#faf8f7',
    borderRadius : 15,
  },

  modalHeader : {
    alignItems : 'center',
    padding : 5,
    borderBottomColor : '#f0ede6',
    borderBottomWidth : 2,
  },

  modalTitle : {
    fontSize : 14,
    fontWeight : 'bold',
    paddingVertical : 5,
  },
  
  modalDescription : {
    fontSize : 14,
    fontWeight : 'bold',
    paddingVertical : 5,
  },

  modalCancelButton : {
    backgroundColor : '#faf8f7',
    alignItems : 'center',
    marginTop : 10,
    borderRadius : 15,
  },

  modalCancelButtonText : {
    fontSize : 18,
    fontWeight : 'bold',
    color : '#0095ff',
    padding : 10,
  }

})




