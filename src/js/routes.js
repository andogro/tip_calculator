app.config(function($routeProvider) {
  $routeProvider
    .when('/details', {
      templateUrl: 'views/details.html',
      controller: 'detailsController'
    })
    .when('/charges', {
      templateUrl: 'views/charges.html',
      controller: 'chargesController'
    })
    .when('/earnings', {
      templateUrl: 'views/earnings.html',
      controller: 'earningsController'
    })
    .otherwise('/details');
});