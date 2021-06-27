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


export function redBlackChoice(data:number){
  return (
    data
      ?
    {
     'color'     :'#393b39',
     'fontSize'  : 13,
     'fontWeight': 'bold'
    }
      :
    {
      color     :'red',
      fontSize  : 13,
      fontWeight: 'bold'
    }
  )
}

export function todayDate(){

  let today = new Date()

  let mm   = String( today.getMonth() + 1 ).padStart(2,'0');
  let dd   = String( today.getDate() ).padStart(2,'0');
  let yyyy = String( today.getFullYear() )

  let final_today = yyyy + '-' + mm + '-' + dd;
  return final_today
}

export function getDates(data:Array<any>){
  let dateList = []
  let dataS = ''

  for (let x of data) {
    dateList.push(
      '"'+String(x.entry_date)+'"'
    )
  }
  dataS = dateList.join(', ')
  return '( ' + dataS + ' );'
}

export function readySaleData(dataList){
  let dataArray  = []
  let dataObject = {}

  for ( let data of dataList ){

    let entry_date = data.entry_date

    delete data.entry_date

    dataArray.push(data) 

    dataObject[ entry_date ] = dataArray
  }

  //console.log('Array making - ',dataObject)
  return dataObject

}






















