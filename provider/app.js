var app = angular.module('MyApp', []);

var MyFunc = function () {
    this.name = "default name";
    this.$get = function () {
        this.name = "new name"
        return "Hello from MyFunc.$get(). this.name = " + this.name;
    };
    return "Hello from MyFunc(). this.name = " + this.name;
};

// returns a new instance of the function
app.service('myService', MyFunc);

// returns the function's return value
app.factory('myFactory', MyFunc);

// returns the output of the function's $get function
app.provider('myProv', MyFunc);

app.controller('MyCtrl', function ($scope, myService, myFactory, myProv) {
    $scope.serviceOutput = "myService = " + myService;
    $scope.factoryOutput = "myFactory = " + myFactory;
    $scope.providerOutput = "myProvider = " + myProv;
});