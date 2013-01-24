'use strict';

/* Controllers */


function CtrlUne($scope, $http) {
	$http.get('data/une.json').success(function(query) {
	 $scope.elements = query.data;
	 $scope.firstElement = query.data.slice(0,1);
	 $scope.flowElements = query.data.slice(1);
  });
}


function CtrlRubrique() {
}

