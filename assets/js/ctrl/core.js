<!-- core.js -->

app.controller('GlobalCtrl', ['$scope', '$firebase', function( $scope, $firebase ){

        var url = 'https://homeystyle.firebaseio.com'; //link to my firebase account
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.addList = function() {
        	
        	var newList = {
        		"title": 	$scope.listTitle, 
				"toDos": 	$scope.createdList 
        	}
        	$scope.ListStorage.$add(newList); 
        }
        

}]);

//controller for detail.xxx
app.controller('addListCtrl', ['$scope', '$firebase', function( $scope, $firebase ){ 

        var url = 'https://homeystyle.firebaseio.com'; 
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.addList = function() { 
        	
        	var newList = { 
        		"title": 	$scope.listTitle, 
				"toDos": 	$scope.createdList 
        	}
        	$scope.ListStorage.$add(newList); 
        }
}]);

//controller for AllLists.html
app.controller('AllListsCtrl', ['$scope', '$firebase', function( $scope, $firebase ){ 

        var url = 'https://homeystyle.firebaseio.com'; 
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.addList = function() { 

        	var newList = { 
        		"title": 	$scope.listTitle, 
				"toDos": 	$scope.createdList
        	}
        	$scope.ListStorage.$add(newList); 
        }      

}]);

//controller for eachList.html
/*
app.controller('EachListCtrl', ['$scope', '$firebase', function( $scope, $firebase ){ 

        var url = 'https://homeystyle.firebaseio.com'; 
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.addList = function() { 

        	var newList = { 
        		"title": 	$scope.listTitle, 
				"toDos": 	$scope.createdList
        	}
        	$scope.ListStorage.$add(newList); 
        }
        
        $scope.completedList = function() { 
        	
        	var doneItem = {
        		"done": $scope.completed;
        	}
        	if($scope.completed = true) { 
        
        		//$scope.ListStorage.$remove(doneItem); //want to remove the items that are checked
        	}//if
        } //completedList       

}]);
*/

/*
	
		$scope.searchPhotos = function(){ 

                for(pic in $scope.PhotoList){
                        var photo = $scope.title[pic];
                        if( photo == $scope.title ) {

                                $scope.PhotoList = photo;
                                return true;
                        }
                }
        	
		}
			
}]);

*/














