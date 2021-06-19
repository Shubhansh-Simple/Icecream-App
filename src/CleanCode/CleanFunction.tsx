/*
 * FILE FOR CLEAN CODE
 * CONTAINS ONLY FUNCTION 
 */

export function iconReturn(bool:boolean){
  return (
    bool
      ?
    {
      'iconName'    : 'icecream',
      'color'       : 'pink',
      'bottomTitle' : 'Pieces'
    }
      :
    {
      'iconName'    : 'business-center',
      'color'       : 'brown',
      'bottomTitle' : 'Boxes '
    }
  )
  
}

