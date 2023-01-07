$("document").ready(function() {

	$('button').on('click', function() {

		var value1, value2
		value1 = $('#location').val();
		value2 = $('#location2').val();

		alert(value1 + value2);


	})
})