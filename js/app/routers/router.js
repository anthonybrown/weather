define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
		'use strict';

			var Router = Backbone.Router.extend({
				routes : {
					''						: 'goToDash',
					'counter'     : 'goToCounter',
					'dash'        : 'goToDash',
					'dash/:place'	: 'goToDash',
					'about'				: 'goToAbout'
				},

				initialize: function (view) {
					this.appView = view
				},

				goToDash: function (place) {
					this.appView.setPage('dash')

					if (place) {
						alert('The Weather for ' + place + ' will be..' )
					}
				},

				goToAbout: function () {
					this.appView.setPage('about')
				},

				goToCounter: function() {
					this.appView.setPage('counter')
				}

			})

	 return Router
})

