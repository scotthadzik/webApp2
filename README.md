CFOPortal
=========

Website for Express Angular Framework:
http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/

For Windows Install the following:
	node.js
	npm install -g express
	npm install -g express-generator
	npm install -g yo--------------------->This needs Ruby and Python
	npm install -g generator-angular
	npm install -g grunt-cli
	npm install -g bower
	npm install -g nodemon

	Install .NET Framework 2.0 sdk  Windows 8 (http://www.microsoft.com/en-us/download/details.aspx?id=15354)



Problems installing Yeoman on Windows
		http://ponderingdeveloper.com/2013/03/08/preparing-a-windows-machine-to-use-yeoman/




Windows SDK
compass


To start site

Three command line tabs open.
  One inside client folder 
  one inside server folder.
  One is root

client folder
  $ grunt serve
    localhost:9000
    Close that web browser tab

If you get error Cannot find where you keep your Bower packages run: bower install

Server folder 
  $ npm test
    localhost:3000. 
    THIS one is being served by your express server!

Root
  mongod --dbpath data\db\ --logpath data\logs\mongodb.log --logappend