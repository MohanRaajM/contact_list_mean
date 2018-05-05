SampleAPP.controller('AppCtrl',
  function AppCtrl ($scope,$http) {
    console.info("Hello World from Controller ");

    var refresh = function(){
    	$http.get('/contactList').success(function(response){
    	console.log("I got the data I requested");
    	$scope.contactList = response;
    	$scope.contact = '';
    });
    };
    
    refresh();

   $scope.addContact = function(){
   		console.log($scope.contact);
   		$http.post('/contactlist',$scope.contact).success(function(response){
   			console.log(response);
   			refresh();
   		});
   };


   $scope.removeContact = function(id){
   		console.log(id);
   		$http.delete('/contactlist/'+id).success(function(response){
   			refresh();
   		});
   };


   $scope.editContact = function(id){
   		console.log(id);
   		$http.get('/contactlist/'+id).success(function(response){
   			$scope.contact = response;
   		});
   };


   $scope.updateContact = function(){
   		console.log($scope.contact._id);
   		$http.put('/contactlist/'+$scope.contact._id,$scope.contact).
   			success(function(response){
   				refresh();	
   		});
   };

   $scope.deSelect = function(){
   		$scope.contact = ""; 
   };

  });