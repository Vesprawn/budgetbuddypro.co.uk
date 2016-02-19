var Admin = (function(a) {
	var buildStringQuery = function() {

	};

	a.runQuery = function(e) {
		var sb = [];

		var email = e.find('#user_email').val(),
			userId = e.find('#user_id').val(),
			username = e.find('#user_id').val(),
			firstName = e.find('#user_firstname').val(),
			middleNames = e.find('#user_middlenames').val(),
			surname = e.find('#user_surname').val(),
			dob = e.find('#user_dob').val(),
			signupDate = e.find('#user_signupdate').val();

			if(email !== '') {
				sb.push('e='+email);
			}

			if(userId !== '') {
				sb.push('uName')
			}

		sb.push(e.find('#user_email').val());
		sb.push(e.find('#user_id').val());
		sb.push(e.find('#user_id').val());
		sb.push(e.find('#user_firstname').val());
		sb.push(e.find('#user_middlenames').val());
		sb.push(e.find('#user_surname').val());
		sb.push(e.find('#user_dob').val());
		sb.push(e.find('#user_signupdate').val());


		console.log(sb.join(''));
	};

	return a;
})(Admin || {});

$(document).ready(function() {
	$('#run_query').on('click', function(){Admin.runQuery($('#search_user'))});
});