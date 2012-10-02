var UserWidget = (function($) {
	var _container;
	
	var init = function (config) {
		_container = config.container;
	}
	
	var getUser = function (userId) {
		if (_container) {
			$.getJSON('/user/' + userId, function (data) {
				if(!data || !data.username)
					throw new Error('Invalid response');
				
				_container
					.empty()
					.append('<p>Welcome, ' + data.username + '</p>');
			});
		}
	}
	
	var getContainer = function () {
		return _container;
	}

	return {
		init: init,
		getUser: getUser,
		getContainer: getContainer
	}
} (jQuery));