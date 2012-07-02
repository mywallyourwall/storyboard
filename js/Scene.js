(function () {


	'use strict';

	var utils = window.utils;

	var Scene = function(options){
		this.name = options.name ? options.name : null;
		this.desc = options.desc ? options.desc : null;
		this.setting = options.setting ? options.setting : null;
		this.characters = utils.isArray(options.characters) ? options.characters : [];
		return this;
	};


	Scene.prototype.addCharacter = function(character){
		this.characters.push(character);
		return this.characters;
	};


	Scene.prototype.getCharacters = function(){
		return this.characters;
	};


	Scene.prototype.getSetting = function(){
		return this.setting;
	};


	Scene.prototype.setSetting = function(setting){
		this.setting = setting;
		return this.setting;
	};

	window['Scene'] = Scene;

}());