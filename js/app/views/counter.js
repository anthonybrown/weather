define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
		'use strict';

		var CounterView = Backbone.View.extend({
			count: 0,

			initialize: function () {
				this.$el.append(this.hmtl);
			},

			events : {
				'click span'   : 'addToCounter',
				'click strong' : 'removeView'
			},

			render: function () {
				var html = [
					'<div class="container">',
						'<h1>Creating a subview for a counter <i class="fa fa-ship"></i></h1>',
						'<small>Just to demonstrate Backbone\'s functionality.</small>',
						'<h4>Here we have an element that we can click on and the counter will update</h4>',
						'<p>When we are done we can remove the view altogether.</p>',
						'<h3>This terminal has been clicked<span class="fa-stack fa-lg"><i class="fa fa-square fa-stack-1x"></i><i class="fa fa-terminal fa-stack-1x fa-inverse"></i></span>' + this.count + ' times.</h3>',
						'<h3><strong>REMOVE <i class="fa fa-trash-o"></i></strong></h3>',
						'<p class="danger">You will have to refresh the browser to make the view come back. I\'m not going to dig into this right now.</p>',
					'</div>'
				].join('');

				this.$el.html(html);
				return this;
			},

			addToCounter : function	() {
				this.count++;
				this.render();
			},

			removeView : function (e) {
				console.log(e.currentTarget);
				this.remove();
			}

		})

		return CounterView
})
