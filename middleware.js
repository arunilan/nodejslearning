/* 

Middleware functions are functions that have access to the request object (req), 
the response object (res), and the next function in the application’s request-response 
cycle. The next function is a function in the Express router which, when invoked, 
executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware in the stack.

If the current middleware function does not end the request-response cycle, 
it must call next() to pass control to the next middleware function. 
Otherwise, the request will be left hanging

*/

var express = require('express');
var app = express();

var myLogger = function(req, res, next) {
	console.log("My logger is logging");
	next();
}

var requestTime = function(req, res, next) {
	req.requestTime = Date.now();
	next();
}

app.use(myLogger);
app.use(requestTime);

/*
The next() function is not a part of the Node.js or Express API, 
but is the third argument that is passed to the middleware function. 
The next() function could be named anything, 
but by convention it is always named “next”. To avoid confusion, 
always use this convention.

The order of middleware loading is important: middleware functions that are loaded first are also executed first.

If myLogger is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, because the route handler of the root path terminates the request-response cycle.

The middleware function myLogger simply prints a message, then passes on the request to the next middleware function in the stack by calling the next() function.

*/

app.get('/', function(req,res) {
	res.send("hello world " + req.requestTime);
});

//app.use(myLogger); //having middleware functions after router will not work. 
//app.use(requestTime);

app.listen(3000, function() {
	console.log("application is started and listening in 3000");
});



