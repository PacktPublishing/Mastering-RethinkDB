# Mastering Tableau
This is the code repository for [Mastering RethinkDB](https://www.packtpub.com/big-data-and-business-intelligence/mastering-rethinkdb?utm_source=github&utm_medium=repository&utm_content=9781786461070), published by Packt. It contains all the supporting project files necessary to work through the book from start to finish.
##Instructions and Navigations
All of the code is organized into folders. Each folder starts with a number followed by the application name. For example, Chapter 2.

The code will look like the following:

      var rethinkdb = require('rethinkdb');
      var connection = null;
      rethinkdb.connect({host : 'localhost', port : 28015},function(err,conn) {
      if(err) { 
      throw new Error('Connection error');  
      } else {
      connection = conn;
      }
      });
      
      
### Software requirements:

| Chapter number | Software required (With version) | Hardware specifications | OS required |
|:--------------:|:--------------------------------:|:-----------------------:|:-----------:|
| 1-9 | RethinkDB 2.3 
Node.js 6+
Python 3
Postman (Recommended)
Chrome latest
  |PC or Mac.
The host machine should have at least: 
2.2 GHz Intel Core i5 processor or AMD equivalent (the more cores, the better)
4GB of RAM. The higher, the better.
 | PC with Linux or Windows 7 64 Bit or higher.
Mac with OS X 10.9 or higher.
(Mesos doesn't run in Windows)
 |
