angular.module('starter.controllers', [])

.controller('PeopleCtrl', function($scope, Peoples){
   Peoples.get(function (data) {
      $scope.peopleList = data.results;
    });
    
})

.controller('PlanetsCtrl', function($scope, Planets) {
  Planets.get(function(data){
    var p =  data.results;
    var x = [];
    for (var i = 0; i < p.length; i++) {
      var item = p[i];
      (function(item, i){
        item.id = function(){
          return i+2
        }
        x.push(item);
      })(item, i)
    }
    $scope.planets = x;
  })
})

.controller('PlanetDetailCtrl', function($scope, $stateParams, Planets) {
  Planets.getPlanetDetails($stateParams.planetId, function(planet){
    $scope.planet = planet;
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
