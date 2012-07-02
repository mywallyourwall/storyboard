(function () {

	'use strict';

	var Setting = function(options){
		this.name = options.name ? options.name : null;
		this.desc = options.desc ? options.desc : null;
		this.coords = options.coords ? options.coords : null;
		return this;
	};

	Setting.prototype.setName = function(name){
		this.name = name;
		return this.name;
	};

	Setting.prototype.setCoords = function(coords){
		this.coords = coords;
		return this.coords;
	};

	window['Setting'] = Setting;

}());