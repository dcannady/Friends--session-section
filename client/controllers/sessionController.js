app.controller('sessionController', function($scope, sessionFactory, $routeParams){
    $scope.errors = [];

    sessionFactory.checkStatus(function(data){
      $scope.curUser = data;
      sessionFactory.getFriends(function(data){
          $scope.friends = data;
      })
      sessionFactory.getnonFriends(function(data){
        $scope.nonfriends = data;
      })
    })

})
