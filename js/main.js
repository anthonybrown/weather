require.config({

	paths: {
		'jquery'    : 'libs/jquery-1.12.1.min',
		'underscore': 'libs/underscore-min',
		'backbone'  : 'libs/backbone',
		'bootstrap' : 'libs/bootstrap',
	},

	shim: {
		'underscore' : {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
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
	'app/app'
], function (backbone, App) {
		'use strict';

		App.initialize();
		App.displayTime();
		console.log(App);
});
