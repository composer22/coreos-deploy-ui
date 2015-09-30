angular.module('coreosDeployUI.services', []).factory('Machine',
  function($resource) {
    var bearer = 'Bearer ' + $apiToken
    return $resource($apiURL + '/v1.0/cluster_map', {}, {
      query: {
        data: '',
        method: 'GET',
        params: {},
        isArray: false,
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Authorization':bearer
        }
      }
    });
  });
