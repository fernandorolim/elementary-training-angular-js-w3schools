angular.module("myApp", []).controller("personCtrl", function($scope) {
	$scope.firstName = "Fernando";
	$scope.lastName  = "Rolim";
	$scope.fullName  = function() {
		return $scope.firstName + " " + $scope.lastName;
	}
});