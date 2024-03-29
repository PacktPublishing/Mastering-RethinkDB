


# Mastering RethinkDB
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
| 1-9 | RethinkDB 2.3 Node.js 6+ Python 3 Postman (Recommended) Chrome latest | PC or Mac. The host machine should have at least:2.2 GHz Intel Core i5 processor or AMD equivalent (the more cores, the better) 4GB of RAM. The higher, the better. | PC with Linux or Windows 7 64 Bit or higher. Mac with OS X 10.9 or higher. (Mesos doesn't run in Windows) |

## Related Products:
* [Getting Started with RethinkDB](https://www.packtpub.com/big-data-and-business-intelligence/getting-started-rethinkdb?utm_source=github&utm_medium=repository&utm_content=9781785887604)

* [Mastering F#](https://www.packtpub.com/application-development/mastering-f?utm_source=github&utm_medium=repository&utm_content=9781784393434)

* [Mastering Unity 2D Game Development - Second Edition](https://www.packtpub.com/game-development/mastering-unity-2d-game-development-second-edition?utm_source=github&utm_medium=repository&utm_content=9781786463456)

###Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSe5qwunkGf6PUvzPirPDtuy1Du5Rlzew23UBp2S-P3wB-GcwQ/viewform) if you have any feedback or suggestions.
### Download a free PDF

 <i>If you have already purchased a print or Kindle version of this book, you can get a DRM-free PDF version at no cost.<br>Simply click on the link to claim your free PDF.</i>
<p align="center"> <a href="https://packt.link/free-ebook/9781786461070">https://packt.link/free-ebook/9781786461070 </a> </p>