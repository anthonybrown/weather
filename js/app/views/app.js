define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/counter',
	'app/views/about',
	'app/views/dash'
], function ($, _, Backbone,CounterView,  AboutView, DashView) {

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
						'<a class="navbar-brand" href="#"><i class="fa fa-umbrella"></i> Weather Watcher</a>',
					'</div>',
					'<div id="navbar" class="navbar-collapse collapse">',
						'<ul class="nav navbar-nav">',
							'<li id="nav-dash" class="active"><a href="#dash"><i class="fa fa-rocket"></i> Dashboard</a></li>',
							'<li id="nav-about"><a href="#about"><i class="fa fa-question-circle"></i> About</a></li>',
							'<li class="dropdown">',
              '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-sitemap"></i> Misc<span class="caret"></span></a>',
              '<ul class="dropdown-menu">',
              	'<li id="nav-counter"><a href="#counter">Counter <i class="fa fa-road"></i></a> </li>',
                '<li><a href="#">Another demo <i class="fa fa-road"></i></a></li>',
                '<li><a href="#">One more demo <i class="fa fa-road"></i></a></li>',
                '<li role="separator" class="divider"></li>',
                '<li class="dropdown-header">Nav header</li>',
                '<li><a href="#">Separated link <i class="fa fa-road"></i></a></li>',
                '<li><a href="#">One more separated link <i class="fa fa-road"></i></a></li>',
              '</ul>',
            '</li>',
						'</ul>',
						'<ul class="nav navbar-nav navbar-right">',
							'<p class="navbar-text pull-right"></p>',
							'<li id="nav-counter"><a href="https://github.com/anthonybrown/weather">Tony Brown <i class="fa fa-paw"></i></a> </li>',
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
			this.listenTo(this.model, 'change', this.render)

			this.views['about'] = new AboutView({
				id: 'page-about',
				className: 'page-view'
			})

			this.views['dash'] = new DashView({
				id: 'page-dash',
				className: 'page-view'
			})

			this.views['counter'] = new CounterView({
				id: 'page-counter',
				className: 'page-view'
			})

			this.$el.append(this.html);

			this.$('#content').append(this.views['about'].render().el);
			this.$('#content').append(this.views['dash'].render().el);
			this.$('#content').append(this.views['counter'].render().el);
		},

		render: function() {
			this.$el.css('background-color', this.model.get('backgroundColor'));
			this.$('.navbar-text').html(this.model.get('welcomeMessage'));
			return this;
		},

		setPage: function (page) {
			this.$('.nav li').removeClass('active');
			this.$('.page-view').hide();
			this.$('#page-' + page).show();
			this.$('#nav-' + page).addClass('active');

			//this.model.set('welcomeMessage', 'Welcome to the ' + page + ' page')
		}

	});

	return AppView;
});

