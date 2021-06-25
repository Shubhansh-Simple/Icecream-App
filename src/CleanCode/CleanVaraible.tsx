/*
 * FILE FOR CLEAN CODE
 * CONTAINS ONLY CONTSTANT
 */
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const window = {
   'screenWidth' : width,
   'screenHeight': height,
};

export const icecreamDefault = {
  "icecream" : {
    'icecream_name'   : 'Select Icecream',
    'icecream_id'     : 0,
    'per_box_piece'   : 0,
    'per_piece_price' : 0
  }
};

export const iconDefault = {
  'iconName'    : 'icecream',
  'color'       : 'pink',
  'bottomTitle' : 'Piece'
};



