(function() {
  'use strict';

  angular
      .module('frontend')
      .service('displayUsers', displayUsers);



  /** @ngInject */
  function displayUsers() {

    var data = [
      {
        'firstName': 'Zbigniew',
        'lastName': 'Stonoga',
        'address': 'ul. Zbyszewskiego 21',
        'number': '123-345-567',
      },
      {
        'firstName': 'Asdqwe',
        'lastName': 'Sdgfgfdg',
        'address': 'ul. Zbyszeasdasd 21',
        'number': '123-345-567',
      },
      {
        'firstName': 'Zbdfgfd',
        'lastName': 'Ssdffsaa',
        'address': 'ul. Zbyasdfsdfskiasdo 21',
        'number': '123-345-567',
      },
      {
        'firstName': 'Asdsad',
        'lastName': 'Asdasqwe',
        'address': 'ul. Zhjkiego 21',
        'number': '123-345-567',
      },
    ];

    this.getUsers = getUsers;

    function getUsers() {
      return data;
    }
  }

})();
