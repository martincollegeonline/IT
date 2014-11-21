// Include the express library
var express = require('express');
// Require the file system library
var fs = require('fs');
// Require the xml2js library
var xml2js = require('xml2js');
// Require the body parser library
var bodyParser = require('body-parser');

// Create a new express application instance
var app = express();

// Create a new listening server
var server = app.listen(8080, function() {
    // Display a message informing the server is now listening
    console.log('Listening on port %d', server.address().port);
});
