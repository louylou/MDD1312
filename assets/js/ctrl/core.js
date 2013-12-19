<!-- all controllers -->


app.controller('GlobalCtrl', ['$scope', '$firebase', function( $scope, $firebase ){
		
		$scope.list;
		
        var url = 'https://mymddapp.firebaseio.com/'; //link to my firebase account
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.addList = function() {
        
          	var newList = {
         		"title": 	$scope.listTitle  				 
         	}
        }
}]);

//controller for AllLists.html
app.controller('AllListsCtrl', ['$scope', '$firebase', function( $scope, $firebase ){ 
	
        var url = 'https://mymddapp.firebaseio.com/'; 
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.titleList = function() { 

        	var newListTitle = { 
        		"title": 	$scope.newTitle 
        	}
        	$scope.ListStorage.$add(newListTitle);
        	$scope.newTitle = '';  
        }     
}]);

app.controller('ListDetail', ['$scope', '$firebase', '$routeParams', '$location', function( $scope, $firebase, $routeParams, $location ){ 
	
	
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
		$scope.newTask = ""; //sets the input field back to blank
	}
	
	//deletes the task that has been clicked on
	$scope.toggleTask = function(taskId) {
		
		delete $scope.ListStorage[$scope.listId].toDos[taskId];
		$scope.ListStorage.$save();
	}
	
	//delete whole list function
	$scope.deleteList = function() {
			
		$scope.ListStorage.$remove($scope.listId);
		
		
		//once items deleted will send the user back to 'all Lists' page
		$location.path('/allLists');	
	}
}]);



/*
The login properly adds to firebase but I wasn't sure how to search/match username to log in.
Once the "join" button is clicked, user is sent to list page Where an extra list box is shown 
under the other lists; this is because it is the user & password stored in firebase.
*/

app.controller('loginCtrl', ['$scope', '$firebase', '$location', function( $scope, $firebase, $location ){

        var url = 'https://mymddapp.firebaseio.com/'; 
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.login = function() {
        	
        	var user = {
        		"username": $scope.user, 
				"password": $scope.pass 
        	}
        	$scope.ListStorage.$add(user);
        	$scope.user='';
        	$scope.pass='';
        	$location.path('/allLists');
        	 
        }


}]);

app.controller('MembersCtrl', ['$scope', '$firebase','$location', function( $scope, $firebase, $location ){

        var url = 'https://mymddapp.firebaseio.com/'; 
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.membership = function() {
        	
        	var newMember = {
        		"newFName": 	$scope.fName,
        		"newLName": 	$scope.lName,
        		"newUsername": 	$scope.newUser,
        		"newPassword": 	$scope.newPass,
        		"newEmail": 	$scope.email 		 
        	}
        	$scope.ListStorage.$add(newMember);
        	$scope.fName='';
        	$scope.lName='';
        	$scope.newUser='';
        	$scope.newPass='';
        	$scope.email='';
        	$location.path('/allLists');
        }
}]);















