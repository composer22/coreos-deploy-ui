angular.module('coreosDeployUI', ['ui.router', 'ngResource', 'coreosDeployUI.controllers', 'coreosDeployUI.services']);
angular.module('coreosDeployUI').config(function($stateProvider) {
  $stateProvider.state('machines', {
    url: '/machines',
    templateUrl: 'partials/machines.html',
    controller: 'MachinesController'
  });
}).run(function($state) {
  $state.go('machines');
});
