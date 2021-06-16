import React from 'react';
import {icecream} from './Queries';

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
        (_,{ rows:{_array} }) => {

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


