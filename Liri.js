require("dotenv").config();

// Load the fs package to read and write
var fs = require("fs");

var moment = require('moment');

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var axios = require("axios");

var spotify = new Spotify(keys.spotify);

fs.readFile("random.txt", "utf8", function (error, data) {
    
    if (error) {
        return console.log(error);
    }

    // We will then print the contents of data
    console.log(data);

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    // We will then re-display the content as an array for later use.
    console.log(dataArr);

});