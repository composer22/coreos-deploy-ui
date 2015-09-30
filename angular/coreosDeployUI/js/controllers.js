angular.module('coreosDeployUI.controllers', []).controller('MachinesController',
function($scope, $state, $window, Machine) {

  $scope.searchMachines = function() {
    $scope.machines = Machine.query({mq:$scope.machineQuery, uq:$scope.unitQuery});
    $state.go('machines');
    return
  };

  $scope.machines = Machine.query({mq:"", uq:""});
});
