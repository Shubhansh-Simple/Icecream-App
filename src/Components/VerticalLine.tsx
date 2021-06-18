import React    from 'react'
import { View } from 'react-native';

export default function VerticalLine({ color,  
                                       width,
                                    }){
  return (
    <View style={{ 
        borderRightColor : color,
        borderRightWidth : width 
      }}>
    </View>
  )
};

 

