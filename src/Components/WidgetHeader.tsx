/*
 * Just Adding
 * Header to the widget.
 */
import React from 'react';
import { View, Text } from 'react-native';

// LOCAL
import commonStyle from '../Styles/commonStyle';

export default function WidgetHeader({ title, description }){
  return (
    <View>
     <Text style={ commonStyle.modalInputTitle }>
       {title}
     </Text>

     <Text style={ commonStyle.modalInputDescription }>
       ({description})
     </Text>
    </View>
  )
};

             
