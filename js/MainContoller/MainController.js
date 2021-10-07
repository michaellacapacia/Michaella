app.controller('MainController', ['$scope', function($scope){
  $scope.lat = ["Withdraw", "Deposit"];
}])

app.controller('main', ['$scope', function($scope){
 $scope.Onclickmain = function()
 {$scope.main = true;} 
 $scope.num3 = 300000;
}])

app.controller('getdifference', ['$scope', function($scope){
  $scope.money = 300000;
  $scope.diff = function(amount, num2){
    $scope.txtdifference = 'difference :';
    $scope.difference = parseInt(amount)- parseInt(num2);

  }
}]);
 
app.controller('getdifference', ['$scope', function($scope){
  $scope.money = 300000;
  $scope.diff = function(num3, num2){
    $scope.txtdifference = 'difference : ';
    $scope.difference = parseInt(num3) - parseInt(num2);

  }
}]);