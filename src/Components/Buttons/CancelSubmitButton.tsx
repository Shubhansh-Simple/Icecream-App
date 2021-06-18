/*
 * Two buttons (i.e. Cancel, Submit ) 
 * in a horizontal row
 * with two call backs
 */

import React from 'react';
import { View } from 'react-native';

//LOCAL
import StraightLine   from '../StraightLine';
import VerticalLine   from '../VerticalLine';
import IosInputButton from '../IosInputButton';
import commonStyle    from '../../Styles/commonStyle';

export default function CancelSubmitButton({ submitCallBack,
                                             cancelCallBack 
                                          }){
  return (
    <View>

      {/* HORIZONTAL LINE */}
      <StraightLine
        color='#CACACA'
        width={2}
      />

      {/* HORIZONTAL LINE CONTAINER */}
      <View style={ commonStyle.lineContainer }>
        <IosInputButton
          btnText='Submit'
          btnColor='#2699ff'
          callBack={submitCallBack}
        />
      
        {/* HORIZONTAL LINE */}
        <VerticalLine
          color='#CACACA'
          width={2}
        />

        <IosInputButton
          btnText='Cancel'
          btnColor='red'
          callBack={cancelCallBack}
        />
      </View>
    </View>
  )
};


