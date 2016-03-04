define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
		'use strict';

		var AboutView = Backbone.View.extend({

			initialize: function () {

			},

			render: function () {
				var html = [
					'<div class="jumbotron">',
						'<h1>About the weather app.</h1>',
						'<p class="lead">This app is built using \
							Backbone.js, Underscore, jQuery, Bootstrap and \
							Require.js to load all the seperate JavaScript files.\
							This app also uses Handlebars.js, an excellent templating\
							library for rendering templates.</p>',
						'</div>'
				].join('');
					this.$el.html(html)
					return this
			}
		})

		return AboutView
})
