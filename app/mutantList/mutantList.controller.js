(function() {
    'use strict';
    angular
      .module('mutantApp.mutantList')
      .controller('MutantListController', MutantListController);

function MutantListController() {
    var vm = this;

    vm.addMutant= addmutant;
    vm.mutants= ['deadpool', 'nightcrawler', 'gambit'];
function addMutant() {
  vm.muants.push('seth');
}
}
})();
