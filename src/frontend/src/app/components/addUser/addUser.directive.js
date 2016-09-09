(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('addUser', addUser);

  /** @ngInject */
  function addUser() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/addUser/adduser.html',
      controller: AddUserController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function AddUserController($http) {

      var vm = this;

      vm.user = {};

      vm.saveUser = saveUser;
      vm.sayWhat = sayWhat;

      function saveUser() {
        console.log("wysyłam ziomeczka");
        var vm = this;
        $http.post("/api/users", vm.user).success(function(response) {
          console.log(JSON.stringify(response));
        });
      }

       function sayWhat(){
        console.log("Nasz user: " + JSON.stringify(vm.user));
      }


    }
  }

})();
