mainApp.service('MailboxService', function($http){
    this.getMailboxList = function() { 
		var mailboxList = new Array();
		
		var req = {
			method: 'GET',
			url: 'https://api.helpscout.net/v1/mailboxes.json',
			headers: {
				'Authorization': 'Basic YTg1YTU3NTNlOWQ3Mjg0MjAyNmQ5Yzg2YjE1NDI4Y2I2YzVmMTk5MDpjaGFuZ2V0aGlz'
			}
		}
		$http(req).success(function(response) {
			var items = response.items;

			for(i=0; i < items.length; i++) {
				var mailbox = new Object;
				var item = items[i];
				mailbox.id = item.id;
				mailbox.name = item.name;
				mailboxList.push(mailbox);
			}
        });
		
		return mailboxList;
    }
});