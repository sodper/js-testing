describe('UserWidget', function () {
	var fixture, config, fakeServer;

	// set up
	beforeEach(function () {
		fixture = $('<div id="user-widget"></div>');
		config = { container: fixture };
		fakeServer = sinon.fakeServer.create();

		UserWidget.init(config)
	});

	// tear down
	afterEach(function () {
		fakeServer.restore();
	});

	// test case - spying on $.getJSON
	it('should load user data via Ajax', function () {
		sinon.spy($, 'getJSON');

		UserWidget.getUser(123);
		expect($.getJSON.calledOnce).toBeTruthy();

		$.getJSON.restore();
	});

	// test case - faking server response
	it('should output username when calling getUser valid user id', function () {
		fakeServer.respondWith('GET',
							   '/user/123',
							   [200, { 'Content-Type': 'application/json' },
							   '{"username": "Per Flitig"}']);

		UserWidget.getUser(123);
		fakeServer.respond();

		expect(UserWidget.getContainer().html())
			.toEqual('<p>Welcome, Per Flitig</p>');
	});

});