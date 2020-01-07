require("dotenv").config();

// Load the fs package to read and write
var fs = require("fs");

var moment = require('moment'); 

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var axios = require("axios");

var spotify = new Spotify(keys.spotify);
