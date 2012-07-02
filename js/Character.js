(function () {

	'use strict';

	var Character = function(options){
		this.name = options.name ? options.name : null;
		this.desc = options.desc ? options.desc : null;
		this.imgSrc = options.imgSrc ? options.imgSrc : null;
		return this;
	};


	Character.prototype.setName = function(name){
		this.name = name;
		return this;
	};

	window['Character'] = Character;


}());