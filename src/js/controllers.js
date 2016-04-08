
app.controller('detailsController', ['$scope', 'mealDataService', function($scope, mealDataService) {
  $scope.meal = {};
  $scope.formSubmit = function() {
     var details1 = mealDataService.addMeal($scope.meal);
     $scope.number = details1.length;
     $scope.meal = {};
   }  
}]);

app.controller('earningsController', ['$scope', 'mealDataService', function($scope, mealDataService) {
   
    $scope.totalHere = function() {
    var total = mealDataService.getTotals();
    $scope.add = total.add;
    $scope.total = total.meals.length;
   }
}]);

app.controller('chargesController', ['$scope', 'mealDataService', function($scope, mealDataService) {
    $scope.mealsHere = function() {
    $scope.meals = mealDataService.getMeals();
    }();

}]);

app.controller('resetController', ['$scope', 'mealDataService', function($scope, mealDataService) {
  $scope.greeting = "Hello World!";
}]);