define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/counter'
], function ($, _, Backbone, CounterView) {

	'use strict';

	var AppView = Backbone.View.extend({

		id: 'app-view',
		// creating the html with a string
		// and using join('') to conect the array
		html: [
			'<nav class="navbar navbar-default navbar-fixed-top">',
				'<div class="container">',
					'<div class="navbar-header">',
						'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">',
							'<span class="sr-only">Toggle navigation</span>',
							'<span class="icon-bar"></span>',
							'<span class="icon-bar"></span>',
							'<span class="icon-bar"></span>',
						'</button>',
						'<a class="navbar-brand" href="#">Weather Watcher</a>',
					'</div>',
					'<div id="navbar" class="navbar-collapse collapse">',
						'<ul class="nav navbar-nav">',
							'<li id="nav-dash" class="active"><a href="#">Dashboard</a></li>',
							'<li id="nav-about"><a href="#about">About</a></li>',
						'</ul>',
					'</div>',
				'</div>',
			'</nav>',
			'<div id="content" class="container well"></div> '// for our child view the counter
		].join(''),

		events: {
			'click #nav-dash' : 'onNavDash',
			'click #nav-about': 'onNavAbout'
		},

		render: function() {
			this.$('#content').append(this.views['counter'].render().el);
			return this;
		},

		views: {},

		initialize: function() {
			this.views['counter'] = new CounterView({
				id: 'counter-widget',
				className: 'counter-widget'
			})

			this.$el.append(this.html);
			// add our counterView to the main view #content
			this.$('#content').append(this.views['counter'].render().el)
		},

		onNavDash : function () {
			alert(this.$el + ' has been clicked')
		},

		onNavAbout : function () {
			alert(this.$el + ' about has been clicked')
		}

	});

	return AppView;
});

