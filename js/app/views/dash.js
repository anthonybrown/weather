define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
		'use strict';

		var DashView = Backbone.View.extend({

			initialize: function () {

			},

			events : {
			},

			render: function () {
				var html = [
					'<div class="jumbotron">',
					'<h1>Dashboard <i class="fa fa-rocket"></i></h1>',
						'<p class="lead">This will be the dashboard of our application</p>',
						'<p>The application will display the weather forecast in a particular city in the world.</p>',
					'</div>',
				].join('')
					this.$el.html(html)
					return this
			}
		})

		return DashView
})
