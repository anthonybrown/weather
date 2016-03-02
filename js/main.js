require.config({

	paths: {
		'jquery': 'libs/jquery-1.12.1.min',
		'underscore': 'libs/underscore-min',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap.min',
		'backbone.localStorage': 'libs/backbone.localStorage-min'
	},
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'backbone.localStorage': {
			deps: [
				'backbone'
			],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		}
	}
});

require([
	'backbone',
	'app/app',
	'bootstrap'
], function (Backbone, App, bootstrap) {
	'use strict';

	App.initialize();

});
