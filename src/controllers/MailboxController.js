mainApp.controller('MailboxController', ['$scope', '$log', 'MailboxService',function($scope, $log, MailboxService) {

    $scope.mailboxList = MailboxService.getMailboxList();

}]);