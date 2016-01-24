// main config.js file

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// load the config file for the current environment
var config = require('./environments/' + process.env.NODE_ENV);

// extend config with universal config data
config.someEnvAgnosticSetting = true;

// export config
module.exports = config;
