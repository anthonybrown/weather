require.config({

	paths: {
		'jquery'     : 'libs/jquery-1.12.1.min',
		'underscore' : 'libs/underscore-min',
		'backbone'   : 'libs/backbone',
		'bootstrap'  : 'libs/bootstrap.min',
		'QUnit'      : 'libs/qunit-1.22.0'
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
		'bootstrap': {
			deps: [
				'jquery'
			]
		},
		'QUnit': {
			exports: 'QUnit',
			init: function() {
				QUnit.config.autoload = false
				QUnit.config.autostart = false
			}
		}
	}
});

require([
	'QUnit',
	'tests/utilsTest'
], function (QUnit, utilsTest) {
	'use strict';

	utilsTest.run()
	QUnit.load()
	QUnit.start()
});
