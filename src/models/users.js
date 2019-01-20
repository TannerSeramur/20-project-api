'use strict';

const Model = require('../mongo.js');
const schema = require('????');

/**
 * Class representing a Player.
 * @extends Model
 */
class Users extends Model {}

module.exports = new Users(schema);