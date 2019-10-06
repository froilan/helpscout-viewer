mainApp.service('ConversationService', function($http){
    this.getByStatusAndMailbox = function(status, mailBoxId) { 
		var count = 0;
		
		var url = 'https://api.helpscout.net/v1/search/conversations.json?query=(status:' 
				+ status +' AND mailboxid:' + mailBoxId + ')';
		var req = {
			method: 'GET',
			url: url,
			headers: {
				'Authorization': 'Basic <put key here>'
			}
		}
		
        //$http(req).success(function(response) {
			//count = response.count;
        //});

		return $http(req);
    }
});
