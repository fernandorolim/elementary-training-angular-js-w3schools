app.controller("myCtrl", function($scope) {
	$scope.firstName = "John";
	$scope.lastName  = "Doeg" ; 
});

// Be careful: only an undue capitalize word is enough to break all application: 
// app.Controller ----> WRONG! 
// app.controller ----> OK. 
// FRS: February 2nd, 2018