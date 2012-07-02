(function () {

	'use strict';

	var Chapter = function(options){
		this.name = options.name ? options.name : null;
		this.desc = options.desc ? options.desc : null;
		this.scenes = [];
		return this;
	};


	Chapter.prototype.getScenes= function() {
		return this.scenes;
	};

	Chapter.prototype.addScenes = function(scenes) {
		if (utils.isArray(scenes)) {
			this.scenes = this.scenes.concat(scenes);
		} else {
			this.scenes.push(scenes);
		}
		return this.scenes;
	};

	window['Chapter'] = Chapter;

}());