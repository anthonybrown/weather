define([
	'backbone'
], function (Backbone) {
		'use strict';

		var AppModel = Backbone.Model.extend({
			defaults: {
				'backgroundColor': '#e7e7e7',
				'celsius'        : true,
				'welcomeMessage' : 'the weather watcher'
			}
		});

	return AppModel;
});

