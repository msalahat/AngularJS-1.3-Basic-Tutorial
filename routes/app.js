// App Configuration    
var App = angular.module("Account", ['ngRoute']).config(
    //When using the router provider you do not need to define controllers inside html using ng-controller
    //You need only to specify the element that Angular will display templates in using ng-view, check index.html
    //Each controller is assigned to a template as you can see below
    //Each controller has a specific path after the # sting in the url
    function ($routeProvider) {
        //HomePage
        $routeProvider.when('/', {
                templateUrl: 'views/list.html',
                controller: 'mainController'
            })
            //Add User
            .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'addController'
            })
    }
);



//API Service
//An standalone service that any controller can inject and use.
//Having it isolated from controllers will help us change it's implementation later on wihtout affecting the way controllers call it
App.factory("API", ['$rootScope', function (root) {

    var API = {
        addUser: function (name, age, job_title) {
            var user = {
                "name": name,
                "age": age,
                "job_title": job_title
            };
            //Let's store data into the common scope $rootScope

            if (typeof (root.users) == "undefined") {
                root.users = [];
            }
            root.users.push(user);
        },

        getUsers: function () {
            if (typeof (root.users) == "undefined") {
                return [];
            }
            return root.users;
        }
    }

    return API;

}]);

//App Controllers
App.controller("mainController", ['$scope', 'API', function ($scope, API) {
    var users = API.getUsers();
    $scope.users = users;
}]);

App.controller("addController", ['$scope', 'API', function ($scope, API) {

    $scope.user = {}; // initialize new user to be added
    //inialize a success message display status check views/add.html 
    $scope.userAdded = false;

    $scope.save = function () { // save function to be called on submit
        //calling the API to save user info
        //In real application we need to validate data before submiting 
        //Form validation can be explaind later on
        API.addUser($scope.user.gname, $scope.user.gage, $scope.user.gtitle);
        //Show a success message 
        $scope.userAdded = true;
        $scope.user = {}; // reinitialize user object after saving it's values

    }
}]);