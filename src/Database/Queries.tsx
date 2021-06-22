/*
 * All SQL Query for 
 * our application
 */

export const icecream = {

  createIcecreamQuery : 'CREATE TABLE IF NOT EXISTS "Icecream" ('+
    '"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, '+
    '"icecream_name" varchar(15) NOT NULL, '+
    '"per_piece_price" smallint unsigned NOT NULL CHECK ("per_piece_price" >= 0),'+
    '"per_box_piece" smallint unsigned NOT NULL CHECK ("per_box_piece" >= 0),'+
    '"supplier_commission" smallint unsigned NOT NULL CHECK '+
      '("supplier_commission" >= 0));',

  insertIcecreamQuery : 'INSERT INTO Icecream( icecream_name, '+
                                               'per_piece_price, '+
                                               'per_box_piece, '+
                                               'supplier_commission ) '+
                                               'VALUES(?,?,?,?);',

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

  createStockQuery : 'CREATE TABLE IF NOT EXISTS "Stock" (' +
    '"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, '+
    '"total_piece" smallint unsigned NOT NULL CHECK ("total_piece" >= 0), '+
    '"icecream_id" integer NOT NULL REFERENCES "Icecream" '+
      '("id") DEFERRABLE INITIALLY DEFERRED );',

  readStockQuery : 'SELECT STOCK.ID, icecream_id, icecream_name, total_piece, '+
                   'per_piece_price, per_box_piece '+
                   'FROM STOCK JOIN ICECREAM ON '+
                   'Stock.icecream_id=Icecream.id '+
                   'WHERE total_piece > 0 '+
                   'ORDER BY per_piece_price;',

  // ALIAS ICECREAM_ID TO ID
  readStockIcecreamQuery : 'SELECT STOCK.icecream_id AS id , '+
                           ' icecream_name, total_piece, '+
                           'per_piece_price, per_box_piece '+
                           'FROM STOCK JOIN ICECREAM ON '+
                           'Stock.icecream_id=Icecream.id '+
                           'WHERE total_piece > 0 ',


  insertStockQuery : 'INSERT INTO Stock( icecream_id, total_piece ) '+
                     'VALUES(?,?); ',

  deleteStockQuery : 'DELETE FROM STOCK WHERE id=?;',
}









