/*
 * FUNCTION START
 * AT STARTING OF THE APPLICATION
 */

import {icecream,stock} from './Queries';

export default function queryExecutor( sqlQuery:string, 
                                       argument : null | Array<any>, 
                                       table_name='',
                                       callBack
                                     ){
  /*
   * SQL Query 
   * EXECUTOR
   */

  global.db.transaction( (tx)=>
    {
      tx.executeSql(
        sqlQuery,
        argument,
        ( _,_array ) => {

            console.log('Success in',table_name,'table') 
            if ( typeof callBack === 'function' ){ 
              callBack( _array ) 
            }
          },
        (_,err) => { console.log('Failure in ',table_name,' table - ',err) }
      )
    })
};


export function createIcecream(){
  queryExecutor( icecream.createIcecreamQuery,
                 null,
                 'Icecream-C',
                 false,
               )
}

export function createStock(){
  queryExecutor( stock.createStockQuery,
                 null,
                 'Stock-C',
                 false,
               )
}

