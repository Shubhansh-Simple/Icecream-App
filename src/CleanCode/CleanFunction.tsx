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

/*
 * Returns today's data
 */
export function todayDate(){

  let today = new Date()

  let mm   = String( today.getMonth() + 1 ).padStart(2,'0');
  let dd   = String( today.getDate() ).padStart(2,'0');
  let yyyy = String( today.getFullYear() )

  let final_today = yyyy + '-' + mm + '-' + dd;
  return final_today
}


/*
 * Return date in 
 * good format.
 */
export function dateFormat(date:string){
  return ( new Date(date).toDateString() )
}


/*
 * Combining dates
 * for sql query
 */
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

/*
 * CHECK WEATHER KEY EXIST
 * IN DICTIONARY OBJECT OR NOT
 */
function keyChecker(finalList, entry_date:string){

  if ( finalList.length > 0){
    let itemIndex = 0
    for ( let eachItem of finalList ){
      if ( eachItem.icecreamList[0] === entry_date){
        return itemIndex+1 
      }
      itemIndex++;
    }
    return false
  }
  return false
}


/*
 * CONVERT DATABASE DATA 
 * AS PER FLATLIST PRESENTATION
 * REQUIREMENT
 */
export function dataTypeConvertor(dataList){

  var finalList : Array<Object> = []
  
  if ( dataList.length > 0 ){

    for ( let data of dataList ){

      let temporaryOuterList : Array<any>|null  = []
      let temporaryInnerList : Array<any>|null  = []
      let temporaryObject    : object|null = {}
      let entry_date   : String|null = data.entry_date 
                               //new Date(data.entry_date).toDateString()
      delete data.entry_date

      let keyCheckerOuput = keyChecker(finalList, entry_date)  

      // ENTRY DATE EXIST AS KEY
      if ( keyCheckerOuput ){
        finalList[ Number(keyCheckerOuput)-1 ].icecreamList[1].push(data)
      }
      else{
        temporaryInnerList.push(data)
        temporaryOuterList.push( entry_date, temporaryInnerList )

        temporaryObject['icecreamList'] = temporaryOuterList

        finalList.push( temporaryObject )
      }
      entry_date         = null
      temporaryInnerList = null
      temporaryObject    = null
      temporaryOuterList = null
    }
    //console.log('The final list - ',finalList )
    return finalList.reverse()
  }
}

/*
 * Check weather the 
 * icecream already exist
 * in SALE TABLE with today's date or not.
 */
export function icecreamAlreadyExist( todaySaleList, selectedIcecreamId:number ){

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




















