<!-- core.js -->

app.controller('GlobalCtrl', ['$scope', '$firebase', function( $scope, $firebase ){
		
		$scope.list;
		
        var url = 'https://jotitdownapp.firebaseio.com/'; //link to my firebase account
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.addList = function() {
        
          	var newList = {
         		"title": 	$scope.listTitle  				 
         	}
        }
}]);

//controller for AllLists.html
app.controller('AllListsCtrl', ['$scope', '$firebase', function( $scope, $firebase ){ 
	
        var url = 'https://jotitdownapp.firebaseio.com/'; 
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.titleList = function() { 

        	var newListTitle = { 
        		"title": 	$scope.newTitle 
        	}
        	$scope.ListStorage.$add(newListTitle);
        	$scope.newTitle = '';  
        }     
}]);

app.controller('ListDetail', ['$scope', '$firebase', '$routeParams', function( $scope, $firebase, $routeParams ){ 
	
	
	var watcherVar = $scope.$watch('ListStorage', function(){
			
		var titleToMatch = $routeParams.listName;
		
		for (i in $scope.ListStorage) {
			if ($scope.ListStorage[i].title == titleToMatch) {	
				$scope.listId = i;	
				watcherVar();
			}
		}		
	});

	$scope.addTask = function(){
		
		if($scope.ListStorage[$scope.listId].toDos == undefined){
			$scope.ListStorage[$scope.listId].toDos = [];
		}
		
		$scope.ListStorage[$scope.listId].toDos.push($scope.newTask);
		$scope.newTask = "";
	}
	
	//deletes the task that has been clicked
	$scope.toggleTask = function(taskId) {
		
		delete $scope.ListStorage[$scope.listId].toDos[taskId];
		$scope.ListStorage.$save();
	}

}]);

app.controller('MembersCtrl', ['$scope', '$firebase', function( $scope, $firebase ){

        var url = 'https://jotitdownapp.firebaseio.com/'; //link to my firebase account
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
       // $scope.username = null;
       // $scope.password = null;
        
        $scope.membership = function() {
        	
        	var newMember = {
        		"newFName": 	$scope.fName,
        		"newLName": 	$scope.lName,
        		"newUsername": 	$scope.newUser,
        		"newPassword": 	$scope.newPass,
        		"newEmail": 	$scope.email 		 
        	}
        	$scope.ListStorage.$add(newMember); 
        }
        

}]);

app.controller('loginCtrl', ['$scope', '$firebase', function( $scope, $firebase ){

        var url = 'https://jotitdownapp.firebaseio.com/'; //link to my firebase account
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.username = null;
        $scope.password = null;
        
        $scope.login = function() {
        	
        	var user = {
        		"username": 	$scope.user, 
				"password": 	$scope.pass 
        	}
        	$scope.ListStorage.$add(user); 
        }
        

}]);
















