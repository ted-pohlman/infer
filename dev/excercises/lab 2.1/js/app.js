require([], function() {

	$('.target').html('jQuery is working <br>');

	if (_.contains([1, 2, 3], 3)) {
		$('.target').append('Underscore is working <br>');
	}

	var model = new Backbone.Model({
		isWorking: 'working'
	});
	$('.target').append('Backone is ' + model.get('isWorking'));
});