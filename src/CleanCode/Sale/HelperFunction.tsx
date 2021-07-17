/*
 * Sale page repeated variable
 * and function
 */
import {todayDate} from '../CleanFunction';

/*
 * FUNCTION convert boxes
 * into pieces
 */
export function quantityConverter( per_box_piece : number, 
                                   quantity : number, 
                                   isPiece  : boolean  ){

    return ( !isPiece ?  quantity*per_box_piece : quantity )
}

/*
 * Check weather the 
 * icecream already exist
 * in SALE TABLE with today's date or not.
 */
export function icecreamAlreadyExist( todaySaleList, 
                                              selectedIcecreamId:number ){

  if ( todaySaleList[0] == todayDate() ){
    for ( let x of todaySaleList[1] ){
      if ( x.icecream_id == selectedIcecreamId ){
        console.log('Data FOUND')
        return x.id
      }
    }
    return 0
  }
  else{
    console.log('Date NOT FOUND.')
    return 0
  }
}

