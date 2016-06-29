
(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject=['mutantService', 'user'];

  function MutantListController(mutantService, user) {
    var vm = this;
<<<<<<< HEAD
    var mutantsRef = firebase.database().ref().child('mutants');

    vm.addMutant = addMutant;
    vm.mutants = $firebaseArray(mutantsRef);
    vm.newMutant = new Mutant();

=======
>>>>>>> afternoon

    vm.mutants = mutantService.mutantsByUser(user.uid);

<<<<<<< HEAD
    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new Mutant();
    }
=======
>>>>>>> afternoon
  }
})();
