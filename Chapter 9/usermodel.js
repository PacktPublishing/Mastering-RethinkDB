"use strict";
const rethinkdb = require('rethinkdb');
const db = require('./db');
const async = require('async');

class Users {

  addNewUser(userData,callback) {
    async.waterfall([
      function(callback) {
        var userObject = new db();
        userObject.connectToDb(function(err,connection) {
          if(err) {
            return callback(true,"Error connecting to database");
          }
          callback(null,connection);
        });
      },
      function(connection,callback) {
        rethinkdb.table('users').insert(userData).run(connection,function(err,result) {
          connection.close();
          if(err) {
            return callback(true,"Error happens while adding new user");
          }
          callback(null,result);
        });
      }
    ],function(err,data) {
      callback(err === null ? false : true,data);
    });
  }

  updateUser(userData,callback) {
    async.waterfall([
      function(callback) {
        var userObject = new db();
        userObject.connectToDb(function(err,connection) {
          if(err) {
            return callback(true,"Error connecting to database");
          }
          callback(null,connection);
        });
      },
      function(connection,callback) {
        rethinkdb.table('users').get(userData.id).run(connection,function(err,result) {
          if(err) {
            return callback(true,"Error fetching users from database");
          }
          // update users
          result = userData;
          rethinkdb.table('users').get(userData.id).update(result).run(connection,function(err,result) {
            connection.close();
            if(err) {
              return callback(true,"Error updating the user");
            }
            callback(null,result);
          });
        });
      }
    ],function(err,data) {
      callback(err === null ? false : true,data);
    });
  }

  getAllUsers(callback) {
    async.waterfall([
      function(callback) {
        var userObject = new db();
        userObject.connectToDb(function(err,connection) {
          if(err) {
            return callback(true,"Error connecting to database");
          }
          callback(null,connection);
        });
      },
      function(connection,callback) {
        rethinkdb.table('users').run(connection,function(err,cursor) {
          connection.close();
          if(err) {
            return callback(true,"Error fetching users from database");
          }
          cursor.toArray(function(err, result) {
            if(err) {
              return callback(true,"Error reading cursor");
            }
            callback(null,result)
          });
        });
      }
    ],function(err,data) {
      callback(err === null ? false : true,data);
    });
  }

  deleteUser(userData,callback) {
    async.waterfall([
      function(callback) {
        var userObject = new db();
        userObject.connectToDb(function(err,connection) {
          if(err) {
            return callback(true,"Error connecting to database");
          }
          callback(null,connection);
        });
      },
      function(connection,callback) {
        // find and delete user
        rethinkdb.table('users').get(userData.id).delete().run(connection,function(err,result) {
          connection.close();
          if(err) {
            return callback(true,"Error deleting the user");
          }
          callback(null,result);
        });
      }
    ],function(err,data) {
      callback(err === null ? false : true,data);
    });
  }
}

module.exports = Users;
