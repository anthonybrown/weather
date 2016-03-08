define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/about',
	'app/views/dash'
], function ($, _, Backbone,  AboutView, DashView) {

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
						'<a class="navbar-brand" href="#">Weather Watcher <i class="fa fa-umbrella"></i></a>',
					'</div>',
					'<div id="navbar" class="navbar-collapse collapse">',
						'<ul class="nav navbar-nav">',
						'<li id="nav-dash" class="active"><a href="#dash">Dashboard <i class="fa fa-rocket"></i></a> </li>',
							'<li id="nav-about"><a href="#about">About <i class="fa fa-question-circle"></i></a></li>',
						'</ul>',
					'</div>',
				'</div>',
			'</nav>',
			'<div id="content" class="container well"></div> '// for our child view the counter
		].join(''),

		events: {

		},

		views: {},

		initialize: function() {
			this.views['about'] = new AboutView({
				id: 'page-about',
				className: 'page-view'
			})

			this.views['dash'] = new DashView({
				id: 'page-dash',
				className: 'page-view'
			})

			this.$el.append(this.html);

			this.$('#content').append(this.views['about'].render().el)
			this.$('#content').append(this.views['dash'].render().el)
		},

		setPage: function (page) {
			this.$('.nav li').removeClass('active')
			this.$('.page-view').hide()
			this.$('#page-' + page).show()
			this.$('#nav-' + page).addClass('active')
		},

	});

	return AppView;
});

