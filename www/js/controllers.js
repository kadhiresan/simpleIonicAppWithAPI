angular.module('starter.controllers', [])

.controller('PeopleCtrl', function($scope, Peoples){
    Peoples.get(function (data) {
        $scope.peopleList = data.results;
    });
    
    $scope.doRefresh = function() {
        Peoples.get(function (data) {
            $scope.peopleList = data.results;
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
    
})

.controller('PlanetsCtrl', function($scope, Planets, $ionicLoading) {
    $scope.showLoading = function() {
        //options default to values in $ionicLoadingConfig
        $ionicLoading.show().then(function(){
           console.log("The loading indicator is now displayed");
        });
    }();

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
        $ionicLoading.hide().then(function(){
           console.log("The loading indicator is now hide");
        });
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
