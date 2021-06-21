import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  centerContainer : {
    'flex' : 1,
    'alignItems' : 'center',
    'justifyContent' : 'center',
  },

  blackBg : {
    backgroundColor : '#393b39',
    color : 'white',
    borderRadius : 5,
  },

  screenContainer : {
    flex : 1,
    paddingHorizontal : 5,
    backgroundColor : '#e6e6e6',
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
  },

  modalInputContainer : {
    flex : 1,
    justifyContent : 'center',
    paddingHorizontal : 10,
  },

  modalInputBackground : {
    backgroundColor : '#E0E0E0',
    borderRadius : 10,
  },

  modalInputTitle : {
    fontSize   : 20, 
    fontWeight : 'bold',
    textAlign : 'center',
    paddingTop : 25,
    paddingBottom : 2,
  },

  modalInputDescription : {
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
  }
  
});
