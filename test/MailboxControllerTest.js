"use strict";

describe("MailboxController test", function() {

	var mailboxController;
	var mailboxService;
	var scope;

    beforeEach(module('mainApp'));

    beforeEach(module(function($provide) {
  		$provide.service('MailboxService', function() {
    		this.getMailboxList = jasmine.createSpy('getMailboxList').and.callFake(function() {
      			return [{id: 1001, name: 'Mailbox1'}, 
				{id: 1002, name: 'Mailbox2'}, 
				{id: 1003, name: 'Mailbox3'}];
    		});
  		});
	}));

    beforeEach(inject(function ($controller, $rootScope, _MailboxService_) {
	    scope = $rootScope.$new();
	    mailboxService = _MailboxService_;

	    mailboxController = $controller('MailboxController', {
                '$scope': scope,
                'MailboxService': mailboxService
            });
  	}));

	it("should set mailboxList to contain returned mailboxes from service", function(){
		expect(scope.mailboxList[1]).toEqual({id: 1002, name:'Mailbox2'});
		expect(scope.mailboxList[2]).toEqual({id: 1003, name:'Mailbox3'});
	});
});