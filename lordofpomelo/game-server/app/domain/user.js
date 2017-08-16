/**
 *Module dependencies
 */

var util = require('util');

/**
 * Initialize a new 'User' with the given 'opts'.
 * 通过配置参数初始化一个新user
 * @param {Object} opts
 * @api public
 */

var User = function(opts) {
	this.id = opts.id;
	this.name = opts.name;
  	this.from = opts.from || '';
	this.password = opts.password;
	this.loginCount = opts.loginCount;
	this.lastLoginTime = opts.lastLoginTime;

	this.lastKindId = opts.lastKindId;
};

/**
 * Expose 'Entity' constructor
 */

module.exports = User;
