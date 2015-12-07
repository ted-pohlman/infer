require(["hello", "UserModel"], function(hello, UserModel) {

	$('.target').html('jQuery is working <br>');

	if (_.contains([1, 2, 3], 3)) {
		$('.target').append('Underscore is working <br>');
	}

	var model = new Backbone.Model({
		isWorking: 'working'
	});
	$('.target').append('Backone is ' + model.get('isWorking'));

	hello();
	
	var tom = new UserModel();
	tom.set({business_category: "manufacturing"});


	var business_category = tom.get("business_category");

	console.log(business_category);
	console.log(JSON.stringify(tom));




});