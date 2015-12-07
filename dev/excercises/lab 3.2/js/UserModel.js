define([], function() {

	console.log ("in UserModel");
		var UserModel = Backbone.Model.extend({

		defaults: {
			username: "John",
			//console.log("defaults")

		},
		initialize: function() {
			console.log("initialized");
			console.log("Attributes: " + JSON.stringify(this.attributes));

		}


	});


	return UserModel;


});