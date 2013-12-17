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

//controller for detail.xxx
app.controller('addListCtrl', ['$scope', '$firebase', function( $scope, $firebase ){ 

        var url = 'https://jotitdownapp.firebaseio.com/'; 
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.addList = function() { 
        	
        	var newList = { 
        		"title": 	$scope.listTitle, 
				"toDos": 	$scope.createdList 
        	}
        	$scope.ListStorage.$set(newList);	 
        }
        
        
        
        /******NEW CODE:*******/
        	$scope.inputTags =[];
        	$scope.addTag = function() {
        		if ($scope.tagText.length == 0) {
        			return;
        		}
        		$scope.inputTags.push({name: $scope.tagText});
        		$scope.tagText ='';
        	}
        	$scope.deleteTag = function(key) {
        		if ($scope.inputTags.length > 0 && $scope.tagText.length == 0 && key === undefined) {
        			$scope.inputTags.pop();
        		}//if
        		else if (key != undefined) {
        			$scope.inputTags.splice(key, 1);
        		}//else
        	}
        /************************************/
}]);


//********NEW CODE: jQuery needs to be changed
app.directive('tagInput', function(){ 
	
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			//console.log('hello');
			scope.inputWidth =20;
		
			//watch for changes in the text field
			scope.$watch(attrs.ngModel, function(value) { //ngModel = tagText model
				if(value != undefined) {
					var tempEl = $('<span>' + value + '</span>').appendTo('body');
					scope.inputWidth = tempEl.width() + 5;
					tempEl.remove();
				}//if
			}); //$watch
			element.bind('keydown', function(e) {
				if (e.which == 9) { //9 = tab key
					e.preventDefault();
				}//if
				if(e.which == 8) { //if the 'X' is pressed
					scope.$apply(attrs.deleteTag);
				}//if		
			});
			
			element.bind('keyup', function(e) {
				var key = e.which;
				
				//tab or enter pressed
				if (key == 9 || key == 13) { //9 = tab key
					e.preventDefault();
					scope.$apply(attrs.newTag);
				}//if
				
			});
			
		}//link	
	}//return
});



//controller for AllLists.html
app.controller('AllListsCtrl', ['$scope', '$firebase', function( $scope, $firebase ){ 

        var url = 'https://jotitdownapp.firebaseio.com/'; 
        var sync = $firebase(new Firebase(url)).$bind($scope, 'ListStorage'); 
        
        $scope.addList = function() { 

        	var newList = { 
        		"title": 	$scope.listTitle, 
				"toDos": 	$scope.createdList
        	}
        	$scope.ListStorage.$add(newList); 
        }      

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
		
		console.log('am i here?', $scope.ListStorage[$scope.listId].toDos);
		if($scope.ListStorage[$scope.listId].toDos == undefined){
			$scope.ListStorage[$scope.listId].toDos = [];
		}
		
		$scope.ListStorage[$scope.listId].toDos.push($scope.newTask);
		console.log($scope.ListStorage[$scope.listId].toDos);
		$scope.newTask = "";
	}
	
	$scope.toggleTask = function(taskId) {
		
		delete $scope.ListStorage[$scope.listId].toDos[taskId];
		$scope.ListStorage.$save();
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














