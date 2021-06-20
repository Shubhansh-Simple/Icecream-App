import React from 'react';
import { View, 
         Text, 
         StyleSheet } from 'react-native';

// LOCAL
import commonStyle  from '../../../Styles/commonStyle';
import StraightLine from '../../StraightLine';
import Icon         from '../../Buttons/Icon';

export default function IcecreamItem({ icecream_name,
                                       per_piece_price,
                                       per_box_piece,
                                       supplier_commission }){
  return (
    <View style={[ styles.itemContainer, commonStyle.shadow ]}>

      <View style={ commonStyle.lineContainer }>

        <Icon 
          iconName     ='edit'
          iconSize     ={24}
          color        ='#0095ff'
          bgCircleColor='white'
          bottomTitle  ={false}
          callBack     ={ ()=>console.log('This is the game') }
        />

        <Text style={styles.titleStyle}>
          {icecream_name}
        </Text>

        <Icon 
          iconName     ='delete-forever'
          iconSize     ={24}
          color        ='#fc3158'
          bgCircleColor='white'
          bottomTitle  ={false}
          callBack     ={ ()=>console.log('This is the game') }
        />        
      </View>

      <StraightLine color='grey' width={1} />

      <Text style={ [styles.textStyle,{fontWeight:'bold'}] }> 
        Price - {per_piece_price} Rs 
      </Text>
      <Text style={styles.textStyle}>
        Total Piece - {per_box_piece} piece
      </Text>
      <Text style={styles.textStyle}>
        Supplier Commission - {supplier_commission} Rs 
      </Text>
    </View>
  )

}

const styles = StyleSheet.create({

  titleStyle : {
    fontSize : 20,
    paddingBottom : 3,
    marginVertical : 5,
    fontWeight : 'bold',
    bottom : 5,
  },

  textStyle : {
    fontSize : 15,
    textAlign : 'center',
    fontStyle : 'italic',
  },

  iconStyle : {
    padding : 4,
    borderRadius : 50,
  },

  itemContainer : {
    alignSelf : 'stretch',
    padding : 10,
    paddingVertical : 10,
    marginVertical : 5,
    borderRadius : 10,
    backgroundColor : 'white',
    marginHorizontal : 5,
  }
})


