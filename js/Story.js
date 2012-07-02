(function () {

	'use strict';

	var Story = function(options){
		this.name = options.name ? options.name : null;
		this.desc = options.desc ? options.desc : null;
		this.chapters = [];
		return this;
	};

	Story.prototype.getChapters = function() {
		return this.chapters;
	};

	Story.prototype.addChapters = function(chapters) {
		if (utils.isArray(chapters)) {
			this.chapters = this.chapters.concat(chapters);
		} else {
			this.chapters.push(chapters);
		}
		return this.chapters;
	};

	window['Story'] = Story;

}());