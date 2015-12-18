"use strict";

describe("ConversationService test", function() {

	var http;
	var httpBackend;
	var conversationService;

    beforeEach(module('mainApp'));

    beforeEach(inject(function (_ConversationService_, $httpBackend) {
	    conversationService = _ConversationService_;
	    httpBackend = $httpBackend;
  	}));


	describe("Get By Status and Mailbox", function() { 

		it("should call get http request for given status and mailbox", function(){
			var url = "https://api.helpscout.net/v1/search/conversations.json?query=(status:pending AND mailboxid:1001)";
			httpBackend.when("GET", url).respond({});
			conversationService.getByStatusAndMailbox("pending", "1001")
			httpBackend.flush();
			httpBackend.expect('GET', url);
		});
	});
});