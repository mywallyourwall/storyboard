(function () {

	'use strict';

	var namespace = 'storyboard';
	window[namespace] = (function(){
		var story;




		function setup(){
			story = new Story({});
			story.addChapter(new Chapter({}));
		};


		return {

				'init' : function(){
					return setup();
				}

		}


	}());

}());