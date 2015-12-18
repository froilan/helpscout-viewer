/**
 * Created by froilan on 8/30/15.
 */
mainApp.controller('ConversationController', ['$scope', '$log', '$interval', 'ConversationService',function($scope, $log, $interval, ConversationService) {

    var synacySupportMailboxId = 21167;
	
	$scope.count=0;
	$scope.activeCount=0;
	$scope.pendingCount=0;
	$scope.closedCount=0;
    $scope.mailboxId;

    var getSynacyMailboxActiveCount = function() {
        ConversationService.getByStatusAndMailbox("active", synacySupportMailboxId).success(function(data) {
            $scope.count = data.count
            //$timeout(getSynacyMailboxActiveCount, 5000)
        });
    }

    var updateStatusCounts = function() {
		$scope.activeLoading = true;
        $scope.pendingLoading = true;
        $scope.closedLoading = true;

        ConversationService.getByStatusAndMailbox("active", $scope.mailboxId).success(function(data) {
            $scope.activeCount = data.count;
        }).finally(function () {
			$scope.activeLoading = false;
            if(!$scope.activeLoading && !$scope.pendingLoading && !$scope.closedLoading) {
                $scope.mailboxChangeLoading = false;
            }
		});

        ConversationService.getByStatusAndMailbox("pending", $scope.mailboxId).success(function(data) {
            $scope.pendingCount = data.count;
        }).finally(function () {
            $scope.pendingLoading = false;
            if(!$scope.activeLoading && !$scope.pendingLoading && !$scope.closedLoading) {
                $scope.mailboxChangeLoading = false;
            }
        });

        ConversationService.getByStatusAndMailbox("closed", $scope.mailboxId).success(function(data) {
            $scope.closedCount = data.count;
        }).finally(function () {
            $scope.closedLoading = false;
            if(!$scope.activeLoading && !$scope.pendingLoading && !$scope.closedLoading) {
                $scope.mailboxChangeLoading = false;
            }
        });
    }

	$scope.setCurrentMailbox = function(mailboxId) {
        $scope.mailboxId = mailboxId;
        $scope.mailboxChangeLoading = true;
        updateStatusCounts();
    }

    $scope.setCurrentMailbox(null);

	$interval(updateStatusCounts, 15000);

}]);