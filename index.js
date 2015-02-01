
var path = require('path');
var stylus = require('stylus');
var utils = stylus.utils;

/**
 * Library version.
 */

exports.version = require(path.join(__dirname, 'package.json')).version;

/**
 * Stylus path.
 */

exports.path = __dirname;

exports = module.exports = plugin;


/**
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */

function plugin() {
  return function(style){
    style.include(__dirname);
  };
}

