define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
		'use strict';

		var Router = Backbone.Router.extend({
			routes : {
				''			: 'goToDash',
				'dash'	: 'goToDash',
				'about' : 'goToAbout'
			},

			initialize: function (view) {
				this.appView = view
			},

			goToDash: function () {
				this.appView.setPage('dash');
			},

			goToAbout: function () {
				this.appView.setPage('about')
			}

		})

		return Router
});

