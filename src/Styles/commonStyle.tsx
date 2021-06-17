import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  centerContainer : {
    'flex' : 1,
    'alignItems' : 'center',
    'justifyContent' : 'center',
  },

  errorText : {
    color     : 'red',
    fontSize  : 15,
    alignSelf : 'center',
  },

  lineContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  },

  shadow  : {
    shadowColor : 'black',
    shadowOffset : { width : 0, height : 9},
    shadowOpacity : 0.9,
    elevation : 7,
    shadowRadius : 2,
  },

  positionBtnContainer : {
    position : 'absolute',
    bottom : 0,
    paddingHorizontal : 40,
    paddingBottom : 40,
    alignSelf : 'flex-end',
  }

  
});
