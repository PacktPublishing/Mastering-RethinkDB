const mysql = require('mysql');
const polyglot = require('./polyglot');

class syncMysql {
  constructor() {
    // connect to mysql
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'codeforgeek'
    });
    connection.connect();
    this.handleOperation(connection);
  }

  handleOperation(connection) {
    let self = this;
    let sync = new polyglot();
    sync.on('insert',function(data) {
      console.log("Mysql --",data);
      let query = "INSERT INTO ?? (??,??,??,??,??) VALUES (?,?,?,?,?)";
      query = mysql.format(query,['users','rethinkid','name','dob','gender','location',data.new_val.id,data.new_val.name,data.new_val.dob,data.new_val.gender,data.new_val.location]);
      connection.query(query,function(err,result) {
        if(err) {
          console.log(err);
        } else {
          console.log("Synced to MySQL");
        }
      });
    });
    sync.on('update',function(data) {
      console.log("Mysql --",data);
      let query = "UPDATE ?? SET ?? = ?,?? = ?, ?? = ?, ?? = ? WHERE ?? = ?";
      query = mysql.format(query,["users","name",data.new_val.name,"dob",new Date(data.new_val.date),"gender",data.new_val.gender,"location",data.new_val.location,"rethinkid",data.new_val.id]);
      connection.query(query,function(err,result) {
        if(err) {
          console.log(err);
        } else {
          console.log("Synced to MySQL");
        }
      });
    });
    sync.on('delete',function(data) {
      console.log("Mysql --",data);
      let query = "DELETE FROM ?? WHERE ?? = ?";

      query = mysql.format(query,["users","rethinkid",data.old_val.id]);
      connection.query(query,function(err,result) {
        if(err) {
          console.log(err);
        } else {
          console.log("Synced to MySQL");
        }
      });
    });
  }
}
module.exports = syncMysql;
