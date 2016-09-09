(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($http) {
    var vm = this;
    vm.user = {};
    vm.data = [];
    getAllUsers();

    vm.sayElo = function(){console.log("Elo elo");};

    vm.pushUser = function(user) {
      vm.user = user;
      console.log("wysyłam ziomeczka");
      console.log(JSON.stringify(user));
      $http.post("/api/users", vm.user).success(function (response) {
        console.log(JSON.stringify(response));

        console.log("czyszcze foremke");
        vm.user= {};
        console.log(JSON.stringify(user));

        console.log("Aktualizuje!!");
        getAllUsers();
      });}

     function getAllUsers(){
      $http.get("/api/users").success(function(response) {
        vm.data = response;
        console.log("Pobieram ziomeczkow");
        console.log(JSON.stringify(vm.data));
      });
    }
  }
})();
