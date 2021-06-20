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

/*
 * RETURN ID'S ARRAY
 * FROM ICECREAM LIST
 * FOR CUSTOM QUERY
 */
export function extractId(icecreamList){

  let icecreamIdList = []

  for (let eachIcecream of icecreamList){
    icecreamIdList.push(eachIcecream.icecream_id)
  }

  let icecreamIdJoin = icecreamIdList.join(',')

  return '('+icecreamIdJoin+')'
}

