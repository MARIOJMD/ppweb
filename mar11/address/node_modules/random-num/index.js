'use strict';

var isNumber = require('is-number');

/**
 * Returns a random number between range i ... o
 * @param  {int} i min
 * @param  {int} o max
 * @return {String}   Randon number
 */
module.exports = function randomNum(i, o) {
  if (!isNumber(i) || !isNumber(o)) {
    throw new TypeError('Please define a Range with Numbers');
  }
  return Math.floor((Math.random() * o) + i);
};