var config = {};
    config.baseUrl = 'http://swapi.co/';
    config.api = 'api/'
angular.module('starter.services', [])

.factory('Peoples', function($http){
    return {
      get:function (cb) {
        $http.get(config.baseUrl+config.api+'people').
          success(function(data) {
              cb(data);
        });
      }
    }
})

.factory('Planets', function($http) {
  return {
      get:function (cb) {
        $http.get(config.baseUrl+config.api+'planets').
          success(function(data) {
              cb(data);
        });
      },
      getPlanetDetails: function(planetId, cb){
        $http.get(config.baseUrl+config.api+'planets/'+planetId).
          success(function(data) {
            cb(data);
        });
      }
    }
});
