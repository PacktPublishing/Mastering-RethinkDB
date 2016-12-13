const rethinkdb = require('rethinkdb');
const db = require('./db');
const userObject = new db();
const events = require('events');

class Polyglot extends events {
  constructor() {
    super();
    this.assingChangeFeed();
  }
  assingChangeFeed() {
    let self = this;
    userObject.connectToDb(function(err,connection) {
      if(err) {
        return callback(true,"Error connecting to database");
      }
      rethinkdb.table('users').changes({"include_types": true}).run(connection,function(err,cursor) {
        if(err) {
          console.log(err);
        }
        cursor.each(function(err,row) {
          console.log(JSON.stringify(row));
          if(Object.keys(row).length > 0) {
            if(!!row.type) {
              switch(row.type) {
                case "add": self.emit('insert',row);break;
                case "remove": self.emit('delete',row);break;
                case "change": self.emit('update',row);break;
              }
            } else {
              console.log("No type field found in the result");
            }
          }
        });
      });
    });
  }
}
module.exports = Polyglot;
