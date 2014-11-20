var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
	$scope.prueba='hola';
    $scope.datos={
    	devices:[
    		{
	    		type: 'tipo1',
	    		model: 'modelo1',
	    		mas: {
	    			otro:'1'
	    		}
    		},
    		{
	    		type: 'tipo2',
	    		model: 'modelo2',
	    		mas: {
	    			otro:'2'
	    		}
    		}
    	]
    };
});