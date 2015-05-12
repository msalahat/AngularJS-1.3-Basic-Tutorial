      var IOT = angular.module("IOT", []);

      IOT.factory("SettingsAPI", function () {
          var SettingsAPI = {
              getLightSettings: function () {
                  return {
                      "status": "on"
                  }
              },

              getAirCondSettings: function () {
                  return {
                      "status": "cold",
                      "degree": "24"
                  }
              }
          }
          return SettingsAPI;
      });

      IOT.controller("LightCtrl", ['$scope', 'SettingsAPI', function (scope, api) {
          var settings = api.getLightSettings();

          scope.status = settings.status;
        }]);


      IOT.controller("AirCndCtrl", ['$scope', 'SettingsAPI', function (scope, api) {

          var settings = api.getAirCondSettings();
          scope.status = settings.status;
          scope.degree = settings.degree;
        }]);