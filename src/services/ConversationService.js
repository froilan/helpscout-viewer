mainApp.service('ConversationService', function($http){
    this.getByStatusAndMailbox = function(status, mailBoxId) { 
		var count = 0;
		
		var url = 'https://api.helpscout.net/v1/search/conversations.json?query=(status:' 
				+ status +' AND mailboxid:' + mailBoxId + ')';
		var req = {
			method: 'GET',
			url: url,
			headers: {
				'Authorization': 'Basic YTg1YTU3NTNlOWQ3Mjg0MjAyNmQ5Yzg2YjE1NDI4Y2I2YzVmMTk5MDpjaGFuZ2V0aGlz'
			}
		}
		
        //$http(req).success(function(response) {
			//count = response.count;
        //});

		return $http(req);
    }
});