define([
	'backbone',
	'app/models/place'
], function (Backbone, PlaceModel) {
		'use strict';

		var PlacesCollection = Backbone.Collection.extend({
			initialize: function (options) {
				if (options.url) this.url = options.url;
			},
			localStorage: new Backbone.LocalStorage('Places'),
			model: PlaceModel
		});

		return PlacesCollection;
});

