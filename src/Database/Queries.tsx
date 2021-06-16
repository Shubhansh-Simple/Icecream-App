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
}










