(function () {


	'use strict';

	var utils = {};

	utils.isArray = (function () {
	    if (Array.isArray) {
	        return Array.isArray;
	    }
	 
	    var objectToStringFn = Object.prototype.toString,
	        arrayToStringResult = objectToStringFn.call([]);
	 
	    return function (subject) {
	        return objectToStringFn.call(subject) === arrayToStringResult;
	    };

	}());

	window['utils'] = utils;

}());