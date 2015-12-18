"use strict";

describe("MailboxService test", function() {

	var http;
	var httpBackend;
	var mailboxService;

    beforeEach(module('mainApp'));

    beforeEach(inject(function (_MailboxService_, $httpBackend) {
	    mailboxService = _MailboxService_;
	    httpBackend = $httpBackend;
  	}));


	describe("Get Mailbox List", function() { 

		beforeEach(function() {
			var url = 'https://api.helpscout.net/v1/mailboxes.json';
			httpBackend.when('GET', url).respond(200, {
				items: [{id: 1000, name: 'Mailbox1'}, 
				{id: 1002, name: 'Mailbox2'}, 
				{id: 1003, name: 'Mailbox3'}
			]});

		});

		it("should get mailboxes with id and name", function(){
			var mailboxList = mailboxService.getMailboxList();
			httpBackend.flush();
			expect(mailboxList[0]).toEqual({id: 1000, name:'Mailbox1'});
			expect(mailboxList[2]).toEqual({id: 1003, name:'Mailbox3'});
		});
	});
});