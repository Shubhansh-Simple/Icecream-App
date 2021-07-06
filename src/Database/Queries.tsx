/*
 * All SQL Query for 
 * our application
 */

export const icecream = {

  createIcecreamQuery : 'CREATE TABLE IF NOT EXISTS "Icecream" ('+
                        '"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, '+
                        '"icecream_name" varchar(15) NOT NULL, '+
                        '"is_active" bool NOT NULL , '+

                        '"per_piece_price" smallint unsigned NOT NULL CHECK '+
                          '("per_piece_price" >= 0),'+

                        '"per_box_piece" smallint unsigned NOT NULL CHECK '+
                          '("per_box_piece" >= 0),'+

                        '"supplier_commission" smallint unsigned NOT NULL CHECK '+
                        '("supplier_commission" >= 0));',

  insertIcecreamQuery : 'INSERT INTO Icecream( icecream_name, '+
                                               'is_active, '+
                                               'per_piece_price, '+
                                               'per_box_piece, '+
                                               'supplier_commission ) '+
                                               'VALUES(?,?,?,?,?);',

  readIcecreamQuery : 'SELECT * FROM Icecream ORDER BY per_piece_price ;',

  //Not In Stock Table
  readMissingIcecreamQuery   : 'SELECT "icecream"."id", '         +
                               '"icecream"."icecream_name", '     +
                               '"icecream"."per_piece_price", '   +
                               '"icecream"."per_box_piece" '     + 
                               'FROM "icecream" WHERE NOT ("icecream"."id" IN ',

                               //Endswith -> '(8,3,9) );'

  orderByPrice               : ' ORDER BY per_piece_price ;',

  deleteIcreamQuery : 'DELETE FROM Icecream WHERE id=?;',
}


export const stock = {

  createStockQuery : 'CREATE TABLE IF NOT EXISTS "Stock" ('                +
    '"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, '                    +
    '"total_piece" smallint unsigned NOT NULL CHECK ("total_piece" >= 0), '+
    '"icecream_id" integer NOT NULL UNIQUE REFERENCES "Icecream" '+
        '("id") DEFERRABLE INITIALLY DEFERRED );',

  readStockQuery : 'SELECT STOCK.ID, icecream_id, icecream_name, total_piece, '+
                   'per_piece_price, per_box_piece '                           +
                   'FROM STOCK JOIN ICECREAM ON '                              +
                   'Stock.icecream_id=Icecream.id '                            +
                   'WHERE is_active=1 '                                        +
                   'ORDER BY per_piece_price;',

  readConditionStockQuery : 'SELECT STOCK.ID, icecream_id, '      +
                            'icecream_name, total_piece, '        +
                            'per_piece_price, per_box_piece '     +
                            'FROM STOCK JOIN ICECREAM ON '        +
                            'Stock.icecream_id=Icecream.id '      +
                            'WHERE total_piece>0 AND is_active=1 '+
                            'ORDER BY per_piece_price; ',


  insertStockQuery : 'INSERT INTO Stock( icecream_id, total_piece ) '+
                     'VALUES(?,?); ',

  // -quantity for decrement
  // +quantity for increment
  updateStockQuery : 'UPDATE STOCK SET total_piece = total_piece + ? '+
                     'WHERE id=? ;',

  deleteStockQuery : 'UPDATE STOCK SET total_piece=0 WHERE id=? ;',

}

export const sale = {
  
  createSaleQuery : ' CREATE TABLE IF NOT EXISTS "Sale" ( '+
        '"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, '     +
        '"sold_piece" smallint unsigned NOT NULL CHECK '        +
              '("sold_piece" >= 0), '                           +
        '"entry_date" date NOT NULL, '                          +
        '"icecream_id" integer NOT NULL REFERENCES "icecream" ("id") '+
              'DEFERRABLE INITIALLY DEFERRED ) ;',

  readSaleQuery   : 'SELECT Sale.id,  sold_piece, entry_date, '+
                    'Sale.icecream_id, '+
                    'ICECREAM.icecream_name, '+
                    'ICECREAM.per_piece_price, '+
                    'ICECREAM.per_box_piece, is_active '+
                    'FROM SALE JOIN ICECREAM ON ICECREAM.ID=SALE.icecream_id '+
                    'WHERE entry_date IN ',

  readSaleDatesQuery : 'SELECT DISTINCT entry_date FROM SALE LIMIT 10;', 

  updateSaleQuery : 'UPDATE SALE SET sold_piece = sold_piece + ? WHERE id=? ;',

  insertSaleQuery : 'INSERT INTO SALE ( sold_piece, entry_date, icecream_id ) '+
                    'VALUES( ?,?,?);',

}




