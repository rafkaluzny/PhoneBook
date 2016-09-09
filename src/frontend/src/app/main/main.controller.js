(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

      /** @ngInject */
      function MainController($timeout,displayUsers) {
        var vm = this;
        vm.users= displayUsers.getUsers();
        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.showToastr = showToastr;

        activate();

        function activate() {
          $timeout(function() {
            vm.classAnimation = 'rubberBand';
          }, 4000);
        }

        function showToastr() {
      vm.classAnimation = '';
    }

  }
})();
