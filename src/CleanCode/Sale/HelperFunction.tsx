/*
 * Sale page repeated variable
 * and function
 */

export default function quantityConverter( per_box_piece : number, 
                                           quantity : number, 
                                           isPiece  : boolean  ){

    return ( !isPiece ?  quantity*per_box_piece : quantity )
}


