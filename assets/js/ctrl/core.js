<!-- core.js -->

app.controller('GlobalCtrl', ['$scope', '$firebase', function( $scope, $firebase ){
		
		$scope.list;
		
        var url = 'https://jotitdownapp.firebaseio.com/'; //link to my firebase account
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.addList = function() {
        
          	var newList = {
         		"title": 	$scope.listTitle 
 				 
         	}
        	console.log($scope.ListStorage);
        	//$scope.ListStorage.$add(newList);//is not scoped in this ctrl 
        }
}]);

//controller for AllLists.html
app.controller('AllListsCtrl', ['$scope', '$firebase', function( $scope, $firebase ){ 

	var watcherVar = $scope.$watch('ListStorage', function(){
			
		var titleToMatch = $routeParams.listName;
		
		for (i in $scope.ListStorage) {
			if ($scope.ListStorage[i].title == titleToMatch) {	
				$scope.listId = i;	
				watcherVar();
			}
		}
		
	});

	$scope.titleList = function(){
		
		
		if($scope.ListStorage[$scope.listId].title == undefined){
			$scope.ListStorage[$scope.listId].title = [];
		}
		
		$scope.ListStorage[$scope.listId].title.push($scope.newTitle);			
		$scope.newTitle = "";
	}
	
	
	
	/*
        var url = 'https://jotitdownapp.firebaseio.com/'; 
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.titleList = function() { 

        	var newList = { 
        		"title": 	$scope.listTitle, 
				"toDos": 	$scope.createdList
        	}
        	$scope.ListStorage.$add(newTitle); 
        } 
    */     

}]);

app.controller('ListDetail', ['$scope', '$firebase', '$routeParams', function( $scope, $firebase, $routeParams ){ 
	
	
	var watcherVar = $scope.$watch('ListStorage', function(){
			
		var titleToMatch = $routeParams.listName;
		
		for (i in $scope.ListStorage) {
			if ($scope.ListStorage[i].title == titleToMatch) {
				//$scope.list = $scope.ListStorage[i];	
				$scope.listId = i;	
				watcherVar();
			}
		}
		
	});

	$scope.addTask = function(){
		//$scope.list = $scope.ListStorage[$scope.listId];
		
		//console.log('am i here?', $scope.ListStorage[$scope.listId].toDos);
		
		if($scope.ListStorage[$scope.listId].toDos == undefined){
			$scope.ListStorage[$scope.listId].toDos = [];
		}
		
		$scope.ListStorage[$scope.listId].toDos.push($scope.newTask);
		
		//console.log($scope.ListStorage[$scope.listId].toDos);
		
		$scope.newTask = "";
	}
	
	//deletes the task that has been clicked
	$scope.toggleTask = function(taskId) {
		
		delete $scope.ListStorage[$scope.listId].toDos[taskId];
		$scope.ListStorage.$save();
	}

}]);


app.controller('loginCtrl', ['$scope', '$firebase', function( $scope, $firebase ){

        var url = 'https://jotitdown.firebaseio.com/'; //link to my firebase account
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.username = null;
        $scope.password = null;
        
        $scope.login = function() {
        	
        	var user = {
        		"title": 	$scope.listTitle, 
				"toDos": 	$scope.createdList 
        	}
        	$scope.ListStorage.$add(user); 
        }
        

}]);
















