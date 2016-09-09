(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('getJson', getJson);

  /** @ngInject */
  function getJson() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/displayUsers/getJson.html',
      controller: getJsonController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function getJsonController($http) {
      var vm = this;
      vm.data = [];
      $http.get("/api/users").success(function(response) {
          vm.data = response;
          console.log("Pobieram ziomeczkow");
          console.log(JSON.stringify(vm.data));
        });
  }

}})();
