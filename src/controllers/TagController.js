mainApp.controller('tagController', function($scope, $http) {
	$scope.getTags = function(){
		var tagList = new Array;
		
		var req = {
			method: 'GET',
			url: 'https://api.helpscout.net/v1/tags.json',
			headers: {
				'Authorization': 'Basic YTg1YTU3NTNlOWQ3Mjg0MjAyNmQ5Yzg2YjE1NDI4Y2I2YzVmMTk5MDpjaGFuZ2V0aGlz'
			}
		}
		$http(req).success(function(response) {
			var items = response.items;
			var length = items.length;
			if(length > 5) {
				length = 5;
			}
			for(i=0; i < length; i++) {
				var tag = new Object;
				var item = items[i];
				tag.name = item.tag;
				tag.count = item.count;
				tagList.push(tag);
			}
        });
		
		return tagList;
	}
});