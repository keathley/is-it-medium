function AppController($scope, $http) {
  $scope.result = "";
  $scope.answered = false;

  $scope.loadTitle = function() {
    $http.get('/question').success(function(data) {
      $scope.title = data;
    });
  };

  $scope.answer = function(answer) {
    $scope.answered = true;

    if($scope.title.real == answer) {
      $scope.result = "Correct";
    } else {
      $scope.result = "Incorrect";
    }
  };

  $scope.newTitle = function() {
    $scope.answered = false;
    $scope.loadTitle();
  };
}