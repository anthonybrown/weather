define([
	'backbone',
	'backbone.localStorage'
], function (Backbone) {
		'use strict';

		var AppModel = Backbone.Model.extend({
			localStorage: new Backbone.LocalStorage('AppSettings'),

			defaults: {
				'backgroundColor': '#e7e7e7',
				'celsius'        : true,
				'welcomeMessage' : 'weather watcher'
			}
		});

	return AppModel;
});

